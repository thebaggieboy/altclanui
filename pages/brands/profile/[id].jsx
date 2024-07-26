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



 
export default function BrandProfile({id}) {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [brandResult, setBrandResult] = useState([])
  const [loading, setLoading] = useState(true)
  const add_merch = searchParams.get('update')
  const brand = searchParams.get("brand")
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
  const [decodedToken, setDecodedToken] = useState("")
  const [currentUser, setCurrentUser] = useState("")
  const [dataUser, setDataUser] = useState([])
  const isBrand = useSelector(selectUserType) === USER_TYPES.brand
  //const profileData =  client.getQueryData(["profile", brand_user?.id, user?.user_type])

if (brand_user == null) {
  router.push("/brands/login");
} 

  
useEffect(() => {
  if(token !== null){
    const arrayToken = token.split('.');
    const tokenPayload = JSON.parse(atob(arrayToken[1]));	

    
    setDecodedToken(tokenPayload)
    setCurrentUser(brand_user)
    
    }
  
  
    //getOrder()
    
}, [token, brand_user])




async function fetchProfile() {
  const res =  await fetch(`https://altclan-brands-api-1-1.onrender.com/api/users/${currentUser[0]?.id}`, {
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
if (dataUser == null || dataUser == '') {
  return (
    <div role="status" className="p-10 text-center  ml-30 mr-30">
      <svg aria-hidden="true" class="w-20 h-20 text-3xl text-black animate-spin dark:text-black fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span class="sr-only text-center flex items-center">Loading...</span>
    </div>
  )

}
  return (
     <div key={dataUser?.id} className={styles.brandProfileContent}>
       <div className="ml-5 p-2">
   <button type="button" onClick={()=> router.back()} class="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-black transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
    <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
    </svg>
    <span>Go back</span>
</button>
   </div>
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
<br />
            <Link href="/setting" className="pt-10"> 
            <svg class="mt-5 h-6 w-6 text-gray-900 font-bold"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="3" />  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg></Link>
            </div>

              <div>
              {add_merch == "success" ? merchSuccess : ""}
                <MyTabs/>
              </div>
            </div>
  )
}

