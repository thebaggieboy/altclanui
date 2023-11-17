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


	useEffect(() => {
		if (brand_user === null) {
			router.push("/brands/register");
		}
	}, [brand_user]);
	
	const brandUserData = brand_user;

  const { isPending, error, mutate: updateFn, data } = useUpdateProfileData("https://altclan-brands-api.onrender.com/api/brand_users/", brandUserData?.id, setBrandUser)

  const [formData, setFormData] = useState({
    brand_logo: "",


  })

  const { brand_logo } = formData
  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })

  }

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleChange = () => {

  }

  const updateProfile = (e) => {
    e.preventDefault()
    updateFn(formData)
   
    console.log("Brand Bio Form Submit clicked")
    console.log(formData)
  }

  if (isPending) {
    console.log("updating brand")
  }


  if (error) {
    console.log(error)
  }

  return (
   <>
    <form className={styles.form} encType='multipart/formdata' onSubmit={updateProfile}>

<h1 className={styles.greeting}>About Your Brand</h1>
<p className={styles.login}>Fill in some of your brand details</p>

{error && <p className=' text-red-500 text-sm'>Something went wrong please try again</p>}


<div className='p-5'>
<label htmlFor="" className="text-2xl">Brand Logo</label>
<p className='text-xs'>Please note: It is advisable to upload a clean, well compressed and good quality image as your logo</p>

<div class="flex items-center justify-center mt-1 w-full">

    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
        </div>
        <input id="dropzone-file" type="file"   />
    </label>
</div> 


</div>

<button type='submit' className={styles.submit}>
  {isPending ? <Loader /> : "Submit"}
</button>


</form>
   </>
  )
}
