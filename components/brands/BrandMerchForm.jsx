import React, { use, useState, useLayoutEffect } from 'react';
import styles from '../../styles/brand-merchandise.module.css';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import useAddMerchandise from '../../hooks/useAddMerchandise';
import Loader from "../Loader"
import { USER_TYPES, selectUser } from '../../features/user/userSlice';

const MERCH_FORM_DATA = {
  categories:
   ["T-shirts",
    "Tops",
    "Rings",
    "Chains & Necklaces",
    "Jeans",
    "Jackets",
    "Joggers",
    "Skating",
    "Sweatshirts",
    "Hoodies",
    "Kicks & Slides",
    "Hats & Caps",
    "Masks",
    "Shades",
    "Slides",
    "Earrings",
    "Wallets",
    "Belts",
    "Shoes",
    "Native Wears",
    "Vintage Shirts",
    "Pendants",
    "Lumberjacks",
    "Piercings & Studs",
    "Baggy Wears"],
gender : ["Male", "Female", "Non-Binary"],
  labels: 
  ["None",
    "New Merchandise",
    "Limited Stock",
    "FREE DELIVERY"],
  size_types: {
    none:"",
    clothing: ["S", "M", "L", "XL", "2XL", "3XL"],
    wrist: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5],
    ring: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5],
    foot: [38, 39, 40, 41, 42, 43, 44, 45, 46],
    neck: [ 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5],
  },
  colors:["Black", "White", "Blue", "Red", "Yellow", "Green", "Pink", "Purple"],

}


const BrandMerchForm = (props) => {
  const { isPending, error, mutateAsync: updateFn, data } = useAddMerchandise('https://altclan-brands-api.onrender.com/api/merchandises/', newMerchSuccess,  USER_TYPES.brand)
  const dispatch = useDispatch();
  const brand_user = useSelector(selectUser);
  const router = useRouter()
  async function newMerchSuccess(user) {
		await router.push("/brands/login");
	}

  const [formErr, setFormErr] = useState(error)
  const [formData, setFormData] = useState({
    brand_name: "",
    merchandise_name: "",
    merchandise_type: "",
    labels:"",
    merchandise_description:"",
    merchandise_details:"",
    category:"",
    display_image:"",
    size_type:"",
    available_sizes:"",
    price:""

  })
  const [sizeType, setSizeType] = useState("")
  const [availableSizes, setAvailableSizes] = useState([])
  const [availableColors, setAvailableColors] = useState([])

  const sizeInputChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setAvailableSizes([...availableSizes, value]);
    } else {
      setAvailableSizes(availableSizes.filter((color) => color !== value));
    }
  }
  const colorInputChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setAvailableColors([...availableColors, value]);
    } else {
      setAvailableColors(availableColors.filter((color) => color !== value));
    }
  }
  console.log("Available Sizes: ", availableSizes)
  console.log("Available Colors: ",availableColors)

  const brand = useSelector(selectUser)
	const {brand_name, merchandise_name, size_type, available_sizes,  labels, display_image,merchandise_type, merchandise_gender, discount_price,merchandise_description, merchandise_details,category, price } = formData

	//const merchError = formErr?.email || null;
  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
    console.log("Form Data: ", formData)
  }


  const updateMerchandise = async (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    let data = {}
    console.log("Submit button clicked")
    const map = formData.entries()
    for (const [key, value] of map) {
      data[key] = value
    }
    console.log(data)
  

    await updateFn({ ...data})

  }

  if (isPending) {
    console.log("updating brand")
  }


  if (error) {
    console.log(error)
  }


  return (

    <form className="" onSubmit={updateMerchandise}>
      <div className={styles.loginContainer}>


        <div className={styles.columnText}>



          <p className={styles.login}>Fill in some of your product details</p>

          {error && <p className=' text-red-500 text-sm'>Something went wrong please try again</p>}
          <div>
            <label htmlFor="" className={styles.label}>Merchandise name</label>
            <input type="text" 	onChange={inputChangeHandler} name="merchandise_name" id="brand-name" className={styles.input} placeholder="" required />

          </div>
          <div>
            <label htmlFor="" className={styles.label}>Display image</label> <br />
            <span className={styles.label} style={{fontSize:8.5}}>(This is how your product would be displayed on the shop page.)</span>

            <input type="file" 	onChange={inputChangeHandler} name="display_image" id="brand-name" className={styles.input} placeholder="" required />

          </div>
          <div>
            <label htmlFor="" className={styles.label}>Gender</label>
            <div className="pt-2">
              <select 	onChange={inputChangeHandler} className={styles.input} name="labels" id="">
                <option value="">Choose merch gender</option>
                {
                  MERCH_FORM_DATA.gender.map((l) => <option key={l} value="l">{l}</option>)
                }

              </select>

            </div>

          </div>
          <div>
            <label htmlFor="" className={styles.label}>Available colors</label>
            <div className='mx-[10%] my-2 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-y-2'>
            {
                MERCH_FORM_DATA.colors.map((s) => <div key={s} className=' flex items-center  gap-2'>
                  <input 	onChange={colorInputChange} type='checkbox' className='w-4 h-4' id={s}  value={s} />
                  <label className='cursor-pointer text-lg' htmlFor={s}>{s}</label>
                </div>)
              }

            </div>
        

          </div>
          <div>
            <label htmlFor="" className={styles.label}>Description</label>

            <textarea	onChange={inputChangeHandler}  type="text" name="merchandise_description" id="bio" placeholder="" className={styles.input} required></textarea>
          </div>
          <div>
            <label htmlFor="" className={styles.label}>Details </label> <br />
            <span className={styles.label} style={{fontSize:12}}>(Fill in additional details like highlights etc)</span>

            <textarea 	onChange={inputChangeHandler} type="text" name="merchandise_details" id="bio" placeholder="" className={styles.input} required></textarea>
          </div>
          <div>
            <label htmlFor="" className={styles.label}>Category</label>
            <div className="pt-2">
              <select 	onChange={inputChangeHandler} className={styles.input} name="merchandise_type" id="">
                <option value="" selected disabled>Choose merch category</option>
                {
                  MERCH_FORM_DATA.categories.map((c) => <option key={c} value={c}>{c}</option>)
                }
              </select>

            </div>

          </div>
          <div>
            <label htmlFor="" className={styles.label}>Labels</label>
            <div className="pt-2">
              <select 	onChange={inputChangeHandler} className={styles.input} name="labels" id="">
                <option value="">Choose merch label</option>
                {
                  MERCH_FORM_DATA.labels.map((l) => <option key={l} value={l}>{l}</option>)
                }

              </select>

            </div>

          </div>
          <label htmlFor="" className={styles.label}>Size Type</label>
          <select 	 className={styles.input} name="size_type" id="" onChange={(e) => {
            setSizeType(e.target.value)
            setAvailableSizes([])
          }}>
            <option value="" selected disabled>Select size type</option>
            {
              Object.keys(MERCH_FORM_DATA.size_types).map((st) => <option key={st} value={st}>{st}</option>)
            }

          </select>
          {sizeType === "clothing" && <div className=''>
            <label htmlFor="" className={styles.label}>Clothing Sizes</label>


            <div className='mx-[10%] my-2 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-y-2'>
              {
                MERCH_FORM_DATA.size_types.clothing.map((s) => <div key={s} className=' flex items-center  gap-2'>
                  <input type='checkbox' className='w-4 h-4' id={s} onChange={sizeInputChange} value={s} />
                  <label className=' cursor-pointer text-lg' htmlFor={s}>{s}</label>
                </div>)
              }
            </div>


          </div>}

          {
            sizeType === "ring" && <div className=''>
              <label htmlFor="" className={styles.label}> Ring Sizes</label>

              <div className='mx-[10%] my-2 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-y-2'>
                {
                  MERCH_FORM_DATA.size_types.ring.map((s) => <div key={s} className=' flex items-center  gap-2'>
                    <input type='checkbox' onChange={inputChangeHandler}  className='w-4 h-4' id={s} onChange={sizeInputChange} value={s} />
                    <label className=' cursor-pointer text-lg' htmlFor={s}>{s}</label>
                  </div>)
                }
              </div>

            </div>
          }
          {sizeType === "wrist" &&
            <div>

              <label htmlFor="" className={styles.label} > Wrist Size</label>

              <div className='mx-[10%] my-2 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-y-2'>
                {
                  MERCH_FORM_DATA.size_types.wrist.map((s) => <div key={s} className=' flex items-center  gap-2'>
                    <input type='checkbox' 	onChange={inputChangeHandler} className='w-4 h-4' id={s} onChange={sizeInputChange} value={s} />
                    <label className=' cursor-pointer text-lg' htmlFor={s}>{s}</label>
                  </div>)
                }
              </div>
            </div>
          }

{sizeType === "neck" &&
            <div>

              <label htmlFor="" className={styles.label} > Neck Size</label>

              <div className='mx-[10%] my-2 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-y-2'>
                {
                  MERCH_FORM_DATA.size_types.neck.map((s) => <div key={s} className=' flex items-center  gap-2'>
                    <input type='checkbox' className='w-4 h-4' id={s} onChange={sizeInputChange} value={s} />
                    <label className=' cursor-pointer text-lg' htmlFor={s}>{s}</label>
                  </div>)
                }
              </div>
            </div>
          }

          {sizeType === "foot" &&
            <div className=''>
              <label htmlFor="" className={styles.label}>Shoe Size Guide</label>

              <div className='mx-[10%] my-2 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-y-2'>
                {
                  MERCH_FORM_DATA.size_types.foot.map((s) => <div key={s} className=' flex items-center  gap-2'>
                    <input type='checkbox' className='w-4 h-4' id={s} onChange={sizeInputChange} value={s} />
                    <label className=' cursor-pointer text-lg' htmlFor={s}>{s}</label>
                  </div>)
                }
              </div>

            </div>
          }


          <div>

            <label htmlFor="" className={styles.label}>Price (₦)</label>
            <input type="number" 	onChange={inputChangeHandler} name="merchandise_price" id="mobile_number" className={styles.input} placeholder="" required />

          </div>

          <button type='submit' className={styles.submit}>
            {isPending ? <Loader /> : "Submit"}
          </button>



        </div>
      </div>
    </form>


  );
}

export default BrandMerchForm;
