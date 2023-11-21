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

              

              <h1 className={styles.greeting}>About Your new product</h1>
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
               <div className="p-5">
               <p className="text-xs text-gray-600">Your display image means the inital product image consumers would see while shopping. You can add up to 5 more product images in the next page for more details</p>
               </div>
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
            
            

            <div className=" justify-items-center">
            <p className={styles.label}>Choose all available sizes</p>
<ul class="w-60 text-sm font-medium p-5 justify-items-center text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="vue-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">XS</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="react-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">S</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="angular-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">M</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">L</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">XL</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">2XL</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">3XL</label>
        </div>
    </li>
</ul>

            </div>


            
           
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
