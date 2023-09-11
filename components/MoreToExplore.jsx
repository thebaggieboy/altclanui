import React from 'react'
import styles from "../styles/Home.module.css";
import CountUp from "../src/aboutcounter/brand.jsx" 

export default function about() {
  return (
    <div className='mt-20 pt-10'>
      <div className={styles.section}>
        <p className={styles.p}>
          More To Explore
        </p>

        <br/>

        <div className={styles.row}>

          <div className={styles.col33}>
            <div className={styles.team}>
              <img src="/img/pexels-arianna-jadé-2896823.jpg"/>
              <p>
                BRANDS
              </p>
              
            </div>
          </div>

          <div className={styles.col33}>
            <div className={styles.team}>
              <img src="/img/pexels-athena-2081199.jpg"/>
              <p>
                SHOP
              </p>

            </div>
          </div>

          <div className={styles.col33}>
            <div className={styles.team}>
              <img src="/img/pexels-cottonbro-studio-4937224.jpg"/>
              <p>
                COLLECTIONS
              </p>
              
            </div>
          </div>
        </div>
      </div> <br/>
      
    </div>
  )
}
