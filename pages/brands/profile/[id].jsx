import React, { useState, useEffect, Component } from 'react';
import styles from "./../../../styles/brand.module.css";
import MyTabs from '../../../src/aboutcounter/brandProfile'
import useMerch from '../../../hooks/useMerch';
import { useSelector } from "react-redux";
import Link from 'next/link'
import { USER_TYPES, selectUser, selectUserType, setUser } from '../../../features/user/userSlice';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const id = context.params.id
  const res = await fetch(`https://altclan-brands-api.onrender.com/api/brand_users/${id}`)
  //const res = await fetch(`http://127.0.0.1:8000/api/brand_profile/${id}`);
  const data = await res.json()
  console.log(data)

  return {
    props: {brand:data}
  }

}




export default function BrandProfile({id, brand}) {
  const brand_user = useSelector(selectUser)
	const router = useRouter();

    useEffect(() => {
		if (brand_user === null) {
			router.push("/brands/login");
		}

	}, [brand_user]);

  
  return (
     <div key={brand.id} className={styles.brandProfileContent}>
          <div className={styles.left}>
            <img src={brand.brand_logo} alt="" className={styles.image}/>
          </div>

            <div className={styles.right}>
              <h1>
                {brand.brand_name}
              </h1>
              <div className={styles.numbers}>
               
                <p>{brand.brand_type}</p>
              </div>
              
              <p className={styles.about}>
                {brand.brand_bio}
              </p>
              <br />
              

                <Link style={{backgroundColor:'beige', fontWeight:'bolder'}} className=" p-2 text-xs border-0 text-black" href="/brands/merchandise/new">+ Add product</Link>

                <Link  className="bg-black ml-2 p-2 text-xs border-0 text-white" href={`/brands/dashboard/${brand?.id}?q=${brand?.brand_name}`}>Dashboard</Link>

            </div>

              <div>
                <MyTabs/>
              </div>
            </div>
  )
}
