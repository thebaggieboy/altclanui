import React, { useState, useEffect, Component } from 'react';
import styles from "./../../../styles/brand.module.css";
import MyTabs from '../../../src/aboutcounter/brandProfile'
import useMerch from '../../../hooks/useMerch';
import { useSelector } from "react-redux";
import Link from 'next/link'
import { USER_TYPES, selectUser, selectUserType, setUser } from '../../../features/user/userSlice';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation'
import { selectToken, setToken } from '../../../features/token/tokenSlice';
import fetchProfileData from '../../../lib/fetchProfileData';
import { QueryClient, useQueryClient, useQuery } from "@tanstack/react-query";



 
export default function BrandProfile({id, brand}) {
  const searchParams = useSearchParams();
  const add_merch = searchParams.get('add_merch')
  // console.log(brand_user)
  const merchSuccess =    <div class="flex items-center text-center p-4 mb-4 text-sm text-green-800 border border-0 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
  </svg>
  <span class="sr-only">Info</span>
  <div>
  You added created a merchandise!
  </div>
</div>

const client = useQueryClient()
  const brand_user = useSelector(selectUser)
  const token = useSelector(selectToken)
	const router = useRouter();
  const userId = router.query?.id
  const isBrand = useSelector(selectUserType) === USER_TYPES.brand
  //const profileData =  client.getQueryData(["profile", brand_user?.id, user?.user_type])
  const { data: userData, isLoading, error } = useQuery({
		queryKey: ["profile", userId, "brand"],
		queryFn: () => fetchProfileData(userId, "brand"), enabled: brand_user !== null
	})
  console.log(userData)


  if(token !== null || token == ""){
    const arrayToken = token.split('.');
			const tokenPayload = JSON.parse(atob(arrayToken[1]));	
			console.log("Token Payload ID: ", tokenPayload?.user_id);
			const url = `https://altclan-brands-api-1-1.onrender.com/api/users/${tokenPayload?.user_id}`
  }

    useEffect(() => {
		if (brand_user == null) {
			router.push("/brands/login");
		}
  

	}, [brand_user]);

  
  return (
     <div key={userData?.id} className={styles.brandProfileContent}>
          <div className={styles.left}>
            <img src={userData?.brand_logo} alt="" className={styles.image}/>
          </div>

            <div className={styles.right}>
              <h1>
                {userData?.brand_name}
              </h1>
              <div className={styles.numbers}>
               
                <p>{userData?.brand_type}</p>
              </div>
              
              <p className={styles.about}>
                {userData?.brand_bio}
              </p>
              <br />
              

                <Link style={{backgroundColor:'beige', fontWeight:'bolder'}} className=" p-2 text-xs border-0 text-black" href="/brands/merchandise/new">+ Add product</Link>

                <Link  className="bg-black ml-2 p-2 text-xs border-0 text-white" href={`/brands/dashboard/${userData?.id}?q=${userData?.brand_name}`}>Dashboard</Link>

            </div>

              <div>
              {add_merch == "success" ? merchSuccess : ""}
                <MyTabs/>
              </div>
            </div>
  )
}

