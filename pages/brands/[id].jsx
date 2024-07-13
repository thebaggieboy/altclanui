import React, { useState, useEffect, Component, use } from 'react';
import styles from "../../styles/brand.module.css";
import MyTabs from '../../src/aboutcounter/brandProfile'
import useMerch from '../../hooks/useMerch';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { USER_TYPES, selectUser, selectUserType } from '../../features/user/userSlice';
import useAddFollowers from '../../hooks/useAddFollowers';
import { selectBrandUser } from '../../features/brands/brandUserSlice';
import { useSearchParams } from 'next/navigation';
 


export async function getServerSideProps(context) {
  const id = context.params.id
  const res = await fetch(`https://altclan-brands-api-1-1.onrender.com/api/users/${id}`)
  //const res = await fetch(`http://127.0.0.1:8000/api/brand_profile/${id}`);
  const data = await res.json()
  console.log(data)

  return {
    props: {brand:data}
  }

}





export default function BrandProfile({id, brand}) {
  const user = useSelector(selectUser)
  const brand_user = useSelector(selectBrandUser)
  let current_follower = []
  const [selectedFollowers, setselectedFollowers] = useState([]);
  const [brandFollowers, setbrandFollowers] = useState(brand.followers);
  const [followed, setFollowed ] = useState(false)
  const searchParams = useSearchParams();
  const updateMessage = searchParams.get('update')
  const [formErr, setFormErr] = useState()
  const [formData, setFormData] = useState({
		followers: "",
    
	
	})

  const [followers, setFollowers] = useState([])
  

  const getBrandFollowers = async() =>{
    console.log('Followers: ', brandFollowers)
  }

  const followBrand = async()=>{
    const url = `https://altclan-brands-api-1-1.onrender.com/api/${user[0]?.id}`
    console.log("url: ", url)
    if (!brand?.followers.includes(user[0]?.email)) {
      current_follower = brand.followers.push(user[0]?.email);
      setselectedFollowers(current_follower)
      console.log(`${brand?.brand_name} followers: `, current_follower)
      console.log(`${brand?.brand_name} followers: `, brand?.followers)
      setFollowed(true)
      const res = await fetch(`https://altclan-brands-api-1-1.onrender.com/api/users/${brand?.id}/`, {
        method: "PUT",
        headers: {
  
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email:brand?.email, followers: brand?.followers}),
        
      })
  
      const data = await res.json()
  
      if (res.status >= 200 & res.status <= 209) {
        console.log("Brand Followers UPDATED")
    
      }
      const error = { ...data }
      throw error
  
    
    }
   
  }

  const unFollowBrand = async()=>{
  

    let newFollowers = brand?.followers?.filter(email => email !== user[0]?.email);
    console.log("newFollowers: ", newFollowers )
    // Update the followers on the server
    const res = await fetch(`https://altclan-brands-api-1-1.onrender.com/api/users/${brand?.id}/`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({email:brand?.email, followers: newFollowers }),
  });


const data = await res.json()

if (res.status >= 200 & res.status <= 209) {
console.log("Brand new Followers UPDATED")

}
const error = { ...data }
throw error
    
  }
  

  return (
     <div key={brand.id} className={styles.brandProfileContent}>
        {updateMessage == 'success' ? brandProfileSuccess : ""}

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
              <p className='mt-4' style={{fontWeight:'bolder', fontSize:14}}>
               {brand?.followers?.length} Followers
              </p>
              
							<button
								onClick={!brand?.followers?.includes(user?.[0]?.email) ? followBrand : unFollowBrand}
								className={!brand?.followers?.includes(user?.[0]?.email) ? "mt-3 p-1 flex w-full items-center justify-center rounded-md border border-black bg-black text-base font-medium text-white  focus:ring-black focus:ring-offset-2" : "mt-3 p-1 flex w-full items-center justify-center rounded-md border border-black bg-white text-base font-medium text-black  focus:ring-white focus:ring-offset-2"}
							>
							 {!brand?.followers?.includes(user?.[0]?.email) ? 'Follow' : 'Unfollow'} 
							</button>
              <br/>
            </div>

              <div>
                <MyTabs/>
              </div>
            </div>
  )
}
