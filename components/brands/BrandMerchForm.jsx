import React, { use, useState, useLayoutEffect} from 'react';
import styles from '../../styles/brand-merchandise.module.css';
import BrandProfileInfoForm from './BrandProfileInfoForm';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectBrandUser, setBrandUser } from '../../features/brands/brandUserSlice';
import useUpdateProfileData from '../../hooks/useUpdateProfileData';
import Loader from "../../components/Loader"
import { mutate } from 'swr';

const clothing_size = [


]

const BrandMerchForm = (props) => {

  const brandUserData = useSelector(selectBrandUser);
  const router = useRouter()
  const { isPending, error, mutate: updateFn, data } = useUpdateProfileData("https://altclan-brands-api.onrender.com/api/brand_users/", brandUserData?.id, setBrandUser)

  const [formData, setFormData] = useState({
    brand_name: "",
    merch_name: "",
    merch_type: "",
    merch_category:"",

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

  const updateMerchandise = (e) => {
    e.preventDefault()
    updateFn(formData)
   
    console.log("Brand Bio Form Submit clicked")
    console.log(formData)
    router.push('/brands/profile')
  }

  if (isPending) {
    console.log("updating brand")
  }


  if (error) {
    console.log(error)
  }


  return (
    <div>
      <div className="">
        <div className={styles.loginContainer}>


          <div className={styles.columnText}>
            <form className={styles.form} onSubmit={updateMerchandise}>

              

      
              <p className={styles.login}>Fill in some of your product details</p>

              {error && <p className=' text-red-500 text-sm'>Something went wrong please try again</p>}
              <div className='hidden'>
                <label htmlFor="" className="">Brand name</label>
                <input type="text" value={brand_name} onChange={inputChangeHandler} name="brand_name" id="brand-name" className={styles.input} placeholder="" required />

              </div>
              <div>
                <label htmlFor="" className={styles.label}>Merchandise name</label>
                <input type="text" value={brand_name} onChange={inputChangeHandler} name="brand_name" id="brand-name" className={styles.input} placeholder="" required />

              </div>
              <div>
                <label htmlFor="" className={styles.label}>Merchandise display image</label>
                <input type="file"  onChange={inputChangeHandler} name="brand_name" id="brand-name" className={styles.input} placeholder="" required />
              
              </div>
              <div>
                <label htmlFor="" className={styles.label}>Merchandise description</label>

                <textarea type="text" value={brand_bio} onChange={inputChangeHandler} name="brand_bio" id="bio" placeholder="" className={styles.input} required></textarea>
              </div>
              <div>
                <label htmlFor="" className={styles.label}>Merchandise details</label>

                <textarea type="text" value={brand_bio} onChange={inputChangeHandler} name="brand_bio" id="bio" placeholder="" className={styles.input} required></textarea>
              </div>
              <div>
                <label htmlFor="" className={styles.label}>Merchandise category</label>
                <div className="pt-2">
                   <select className={styles.input} onChange={inputChangeHandler} name="brand_type" id="">
                    <option value="">Choose merch category</option>
                    <option value="Tees">Tees</option>
                    <option value="Rings">Rings</option>

                    <option value="Chains & Necklaces">Chains & Necklaces</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Jackets">Jackets</option>

                    <option value="Joggers">Joggers</option>
                    <option value="Skating">Skating</option>
                    
                    <option value="Sweatshirts">Sweatshirts</option>
                    <option value="Hoodies">Hoodies</option>
                    <option value="Kicks & Slides">Kicks & Slides</option>
                    <option value="Caps and Hats">Caps and Hats</option>
                    <option value="Masks">Masks</option>
                    <option value="Shades">Shades</option>
                    <option value="Lumberjack and Vintage">Lumberjack and Vintage</option>
                    <option value="Piercings & Studs">Piercings & Studs</option>
                    <option value="Baggy Wears">Baggy Wears</option>
                   
                  </select> 

                </div>

              </div>
              <div>
                <label htmlFor="" className={styles.label}>Merchandise labels</label>
                <div className="pt-2">
                   <select className={styles.input} onChange={inputChangeHandler} name="brand_type" id="">
                    <option value="">Choose merch label</option>
                    <option value="None">None</option>
                    <option value="New Merchandise">New Merchandise</option>
                    <option value="Limited Stock">Limited Stock</option>
                    <option value="FREE DELIVERY">FREE DELIVERY</option>
          
                  </select> 

                </div>

              </div>
  
              <label htmlFor="" className={styles.label}>Size Type</label>
              <select className={styles.input} onChange={inputChangeHandler} name="brand_type" id="">
                    <option value="">Select size type</option>
                    <option value="None">Clothing size</option>
                    <option value="New Merchandise">Ring Size</option>
                    <option value="Limited Stock">Wrist Size</option>
                    <option value="FREE DELIVERY">Foot size</option>
          
                  </select> 
           
              <div>
                <label htmlFor="" className={styles.label}>Merhandise Price</label>
                <input type="number" value={mobile_number} onChange={inputChangeHandler} name="mobile_number" id="mobile_number" className={styles.input} placeholder="" required />

              </div>

              <button type='submit' className={styles.submit}>
                {isPending ? <Loader /> : "Submit"}
              </button>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandMerchForm;