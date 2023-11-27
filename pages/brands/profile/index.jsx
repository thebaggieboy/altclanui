import React, { useState, useEffect, Component, useLayoutEffect } from 'react';
//import styles from "../../styles/brand.module.css";
import styles from "./../../../styles/brand.module.css"
//import MyTabs from '../../src/aboutcounter/brandProfile'
import MyTabs from "./../../../src/aboutcounter/brandProfile"
import { useRouter } from 'next/router';
import { selectBrandUser } from '../../../features/brands/brandUserSlice';
import { useDispatch, useSelector } from "react-redux";
import { USER_TYPES, selectUser, selectUserType, setUser } from "../../../features/user/userSlice";
import { useQuery } from "@tanstack/react-query";
import fetchProfileData from "../../../lib/fetchProfileData";
import Link from 'next/link';
export default function BrandProfile({ _id, brand }) {

  const brand_user = useSelector(selectUser)
  const router = useRouter();

  

  useLayoutEffect(() => {
    if (brand_user === null) {
      router.push("/signup");
    }
  }, [brand_user]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile", brand_user?.id],
    queryFn: () => fetchProfileData(brand_user?.id, true), enabled: brand_user !== null
  })

  console.log(data)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    console.log(error)
    return <div>Error fetching profile</div>
  }

  return (
    brand_user !== null ? (
      <>
        <div key={data.id} className={styles.brandProfileContent}>
          <div className={styles.left}>
            <img src={data.brand_logo} alt="You have not uploaded a logo yet" className={styles.image} />
          </div>
          <Link href="/brands/register/brand-bio">Bio</Link>
          <div className={styles.right}>
            <h1>
              {data.brand_name}
            </h1>
            <div className={styles.numbers}>
              <p></p>
              <p>{data.brand_type}</p>
            </div>

            <p className={styles.about}>
              {data.brand_bio}
            </p>
            <br />
          </div>

          <div>
            <MyTabs />
          </div>
        </div>
      </>
    ) : <div className='p-10 text-center'>
      <p>You have been logged out</p>
    </div>

  )
}
