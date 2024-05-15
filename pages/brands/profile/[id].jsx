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
  const [currentUser, setCurrentUser] = useState("")
  const [dataUser, setDataUser] = useState([])
  const isBrand = useSelector(selectUserType) === USER_TYPES.brand
  //const profileData =  client.getQueryData(["profile", brand_user?.id, user?.user_type])

if (brand_user == null) {
  router.push("/brands/login");
}
  
  if(token !== null || token == ""){
    const arrayToken = token.split('.');
			const tokenPayload = JSON.parse(atob(arrayToken[1]));	
			console.log("Token Payload ID: ", tokenPayload?.user_id);
			const url = `https://altclan-brands-api-1-1.onrender.com/api/users/${tokenPayload?.user_id}`
      
      setCurrentUser(brand_user)
  }

  async function fetchProfile() {
		const res =  await fetch(`https://altclan-api-v1.onrender.com/api/users/${currentUser[0]?.id}`, {
			method: "GET",
			headers: {
	
				"Content-Type": "application/json",
			},
			
			credentials: "include"
	
		})
		const data =  await res.json()
		setDataUser(data)
		console.log("Data: ", dataUser)
	}
fetchProfile()

  
  return (
     <div key={dataUser?.id} className={styles.brandProfileContent}>
          <div className={styles.left}>
            <img src={dataUser?.brand_logo} alt="" className={styles.image}/>
          </div>

            <div className={styles.right}>
              <h1>
                {dataUser?.brand_name}
              </h1>
              <div className={styles.numbers}>
               
                <p>{dataUser?.brand_type}</p>
              </div>
              
              <p className={styles.about}>
                {dataUser?.brand_bio}
              </p>
              <br />
              

                <Link style={{backgroundColor:'beige', fontWeight:'bolder'}} className=" p-2 text-xs border-0 text-black" href="/brands/merchandise/new">+ Add product</Link>

                <Link  className="bg-black ml-2 p-2 text-xs border-0 text-white" href={`/brands/dashboard/${dataUser?.id}?q=${dataUser?.brand_name}`}>Dashboard</Link>

            </div>

              <div>
              {add_merch == "success" ? merchSuccess : ""}
                <MyTabs/>
              </div>
            </div>
  )
}

