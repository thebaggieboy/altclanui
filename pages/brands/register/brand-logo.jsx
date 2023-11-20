import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import {selectBrandUser, setBrandUser} from "../../../features/brands/brandUserSlice"
import styles from "../../../styles/brand-bio.module.css";
import useUpdateProfileData from '../../../hooks/useUpdateProfileData';
import Loader from "../../../components/Loader"
export default function BrandLogo() {
  
  //const data = [];
	const loading = false;
	//const error = null;
	const brand_user = useSelector(selectBrandUser);
	const router = useRouter();

	{/* useEffect(() => {
		if (brand_user === null) {
			router.push("/brands/register");
		}
		
	}, [brand_user]);
*/}


	
  const brandUserData = brand_user;

  const { isPending, error, mutate: updateFn, data } = useUpdateProfileData("https://altclan-brands-api.onrender.com/api/brand_users/", brandUserData?.id, setBrandUser)

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("https://altclan-brands-api.onrender.com/api/brand_users", {
      method: "POST",
      body
    });
	console.log(response)
  };

  if (isPending) {
    console.log("updating brand logo")
  }


  if (error) {
    console.log(error)
  }

  return (
   <>
    <form className={styles.form}>

<h1 className={styles.greeting}>About Your Brand</h1>
<p className={styles.login}>Fill in some of your brand details</p>

{error && <p className=' text-red-500 text-sm'>{error}</p>}


<div className='p-5'>
<label htmlFor="" className="text-2xl">Brand Logo</label> <br />
<p className='text-xs'>Please note: It is advisable to upload a clean, well compressed and good quality image as your logo</p>


<img src={createObjectURL} />
<input id="file" type="file" name="myImage" className='mt-2 p-1' onChange={uploadToClient}   />
    

<button type='submit' onClick={uploadToServer} className={styles.submit}>
  {isPending ? <Loader /> : "Submit"}
</button>
</div>




</form>
   </>
  )
}
