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

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    if (brand_user === null) {
      router.push("/signup");
    }
  }, [brand_user]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile", brand_user?.id],
    queryFn: () => fetchProfileData(brand_user?.id, true), enabled: brand_user !== null
  })


  return (
    brand_user !== null ? (
      <>
        <div key={brand_user.id} className={styles.brandProfileContent}>
          <div className={styles.left}>
            <img src={brand_user.brand_logo} alt="You have not uploaded a logo yet" className={styles.image} />
          </div>
       
          <div className={styles.right}>
            <h1>
              {brand_user.brand_name}
            </h1>
            <div className={styles.numbers}>
              <p></p>
              <p>{brand_user.brand_type}</p>
            </div>

            <p className={styles.about}>
              {brand_user.brand_bio}
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
