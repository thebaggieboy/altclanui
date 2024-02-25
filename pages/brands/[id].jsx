import React, { useState, useEffect, Component } from 'react';
import styles from "../../styles/brand.module.css";
import MyTabs from '../../src/aboutcounter/brandProfile'
import useMerch from '../../hooks/useMerch';

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
              
							<button
								
								className="mt-3 p-1 flex w-full items-center justify-center rounded-md border border-black bg-black text-base font-medium text-white  focus:ring-black focus:ring-offset-2"
							>
							Follow
							</button>
              <br/>
            </div>

              <div>
                <MyTabs/>
              </div>
            </div>
  )
}
