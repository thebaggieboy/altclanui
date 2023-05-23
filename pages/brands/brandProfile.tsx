import styles from "@/styles/brand.module.css";
import MyTabs from '@/src/aboutcounter/brandProfile.js'

export default function BrandProfile() {
  return (
     <div className={styles.brandProfileContent}>
          <div className={styles.left}>
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="" className={styles.image}/>
          </div>

            <div className={styles.right}>
              <h1>
                Earthen Bottle
              </h1>
              <div className={styles.numbers}>
                <p>13 items</p>
                <p>48k followers</p>
              </div>
              
              <p className={styles.about}>
                Ehically made and sustainable recyclable thermo bottles
              </p>
              <br/>
            </div>

              <div>
                <MyTabs/>
              </div>
            </div>
  )
}
