import React, { useState, useEffect, Component, use } from 'react';
import styles from "../../styles/brand.module.css";
import MyTabs from '../../src/aboutcounter/brandProfile'
import useMerch from '../../hooks/useMerch';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { USER_TYPES, selectUser, selectUserType } from '../../features/user/userSlice';


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
  const user = useSelector(selectUser)
  const [selectedFollowers, setselectedFollowers] = useState([]);
  const [brandFollowers, setbrandFollowers] = useState(brand.followers);
  const [followed, setFollowed ] = useState(false)
  
  const [formErr, setFormErr] = useState()
  const [formData, setFormData] = useState({
   
    id: user?.id,
    user_email: user?.email,
   

  })
  const getBrandFollowers = async() =>{
    console.log('Followers: ', brand.followers)
  }

  const followBrand = ()=>{
    getBrandFollowers()
    console.log('Following brand')
    selectedFollowers.push(user?.email)
   
    setselectedFollowers(selectedFollowers)
    console.log('Followers: ', selectedFollowers)
   
    setFollowed(true)
  }

  const unFollowBrand = ()=>{
    getBrandFollowers()
    selectedFollowers.pop()
    
    console.log('Followers: ', selectedFollowers)
   
    setFollowed(false)
  }

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
              <p className='mt-4' style={{fontWeight:'bolder', fontSize:14}}>
               {selectedFollowers.length} Followers
              </p>
              
							<button
								onClick={followed == false ? followBrand : unFollowBrand}
								className={followed == false ? "mt-3 p-1 flex w-full items-center justify-center rounded-md border border-black bg-black text-base font-medium text-white  focus:ring-black focus:ring-offset-2" : "mt-3 p-1 flex w-full items-center justify-center rounded-md border border-black bg-white text-base font-medium text-black  focus:ring-white focus:ring-offset-2"}
							>
							 {followed == false ? 'Follow' : 'Unfollow'} 
							</button>
              <br/>
            </div>

              <div>
                <MyTabs/>
              </div>
            </div>
  )
}
