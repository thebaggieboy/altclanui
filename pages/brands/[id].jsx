import React, { useState, useEffect, Component } from 'react';
import styles from "../../styles/brand.module.css";
import MyTabs from '../../src/aboutcounter/brandProfile'

export const getStaticPaths = async()=>{
  const res = await fetch('http://127.0.0.1:8000/api/brands/');
  
  const data = await res.json();
  console.log(data)
  const paths = data.map(brand =>{
     return {
       params: { id: brand.id.toString() }
     }
  })
 
     return{
       paths,
       fallback:false
     }
 }
 
 export const getStaticProps = async(context)=>{
   const id = context.params.id
   const res = await fetch('http://127.0.0.1:8000/api/brands/' + id)
   const data = await res.json()
 
   return {
     props: {brand:data}
   }
 
 }

 
export default function BrandProfile({brand}) {
  
  return (
     <div className={styles.brandProfileContent}>
          <div className={styles.left}>
            <img src={brand.brand_logo} alt="" className={styles.image}/>
          </div>

            <div className={styles.right}>
              <h1>
                {brand.brand_name}
              </h1>
              <div className={styles.numbers}>
                <p>13 items</p>
                <p>{brand.followers} followers</p>
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
