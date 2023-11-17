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
	
	const brandUserData = useSelector(selectBrandUser);

  const { isPending, error, mutate: updateFn, data } = useUpdateProfileData("https://altclan-brands-api.onrender.com/api/brand_users/", brandUserData?.id, setBrandUser)

  const [formData, setFormData] = useState({
    brand_logo: "",


  })

  const { brand_name, brand_bio, brand_type, mobile_number } = formData
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
<div>
  <label htmlFor="" className={styles.label}>Brand name</label>
  <input type="text" value={brand_name} onChange={inputChangeHandler} name="brand_name" id="brand-name" className={styles.input} placeholder="" required />

</div>

<div>
  <label htmlFor="" className={styles.label}>Mobile number</label>
  <input type="number" value={mobile_number} onChange={inputChangeHandler} name="mobile_number" id="mobile_number" className={styles.input} placeholder="" required />

</div>

<button type='submit' className={styles.submit}>
  {isPending ? <Loader /> : "Submit"}
</button>


</form>
   </>
  )
}
