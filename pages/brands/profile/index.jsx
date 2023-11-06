import React, { useState, useEffect, Component } from 'react';
//import styles from "../../styles/brand.module.css";
import styles from "./../../../styles/brand.module.css"
//import MyTabs from '../../src/aboutcounter/brandProfile'
import MyTabs from "./../../../src/aboutcounter/brandProfile"
export async function getServerSideProps(context) {
  const id = context.params.id
  const res = await fetch(`https://altclan-api-v1.onrender.com/api/brand_profile/${id}`)
  //const res = await fetch(`http://127.0.0.1:8000/api/brand_profile/${id}`);
  const data = await res.json()
  console.log(data)

  return {
    props: {brand:data}
  }

}




export default function BrandProfile({_id, brand}) {
  
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
                <p></p>
                <p>{brand.brand_type}</p>
              </div>
              
              <p className={styles.about}>
                {brand.brand_bio}
              </p>
              <br/>
            </div>

              <div>
                <MyTabs/>
              </div>
            </div>
  )
}
