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




	
  const brandUserData = brand_user;

  const { isPending, error, mutate: updateFn, data } = useUpdateProfileData("https://altclan-brands-api.onrender.com/api/brand_users/", brandUserData?.id, setBrandUser)

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
      router.push('/brands/profile')
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
  router.push('/brands/profile')
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

<h1 className={styles.greeting}>Brand Logo</h1>
<p className={styles.login}>Please note: It is advisable to upload a clean, well compressed and good quality image as your logo</p>

{error && <div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
									<svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
										<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
									</svg>
									<span class="sr-only">Info</span>
									<div class="mx-auto text-sm text-center font-medium">
									{error}
									</div>

								</div>}


<div className='text-center'>
<img className={styles.logoSize} src={createObjectURL}  />
<input id="file" type="file" name="file" className=' p-1' onChange={uploadToClient}   />
    

<button type='submit' onClick={uploadToServer} className={styles.submit}>
  {isPending ? <Loader /> : "Submit"}
</button>
</div>




</form>
   </>
  )
}
