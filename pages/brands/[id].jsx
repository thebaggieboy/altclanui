import styles from "@/styles/brand.module.css";
import MyTabs from '@/src/aboutcounter/brandProfile.js'

export const getStaticPaths = async()=>{
  const res = await fetch('https://altclan-api-v1.onrender.com/api/brands/');
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
   const res = await fetch('https://altclan-api-v1.onrender.com/api/brands/' + id)
   const data = await res.json()
 
   return {
     props: {brand:data}
   }
 
 }

 
export default function BrandProfile({brand}) {
  
  return (
     <div className={styles.brandProfileContent}>
          <div className={styles.left}>
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="" className={styles.image}/>
          </div>

            <div className={styles.right}>
              <h1>
                {brand.brand_name}
              </h1>
              <div className={styles.numbers}>
                <p>13 items</p>
                <p>48k followers</p>
              </div>
              
              <p className={styles.about}>
                {brand.bio}
              </p>
              <br/>
            </div>

              <div>
                <MyTabs/>
              </div>
            </div>
  )
}
