import React, { use, useState, useLayoutEffect } from 'react';
import styles from '../../styles/brand-merchandise.module.css';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import useAddMerchandise from '../../hooks/useAddMerchandise';
import Loader from "../Loader"
import { selectUser } from '../../features/user/userSlice';

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

  labels: 
  ["None",
    "New Merchandise",
    "Limited Stock",
    "FREE DELIVERY"],
  size_types: {
    clothing: ["S", "M", "L", "XL", "2XL", "3XL"],
    wrist: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5],
    ring: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5],
    foot: [38, 39, 40, 41, 42, 43, 44, 45, 46]
  }
}


const BrandMerchForm = (props) => {
  const { isPending, error, mutateAsync: updateFn, data } = useAddMerchandise()
  const router = useRouter()
  const [formData, setFormData] = useState({
    brand_name: "",
    merch_name: "",
    merch_type: "",
    merch_category: "",

  })
  const [sizeType, setSizeType] = useState("")
  const [availableSizes, setAvailableSizes] = useState([])

  const sizeInputChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setAvailableSizes([...availableSizes, value]);
    } else {
      setAvailableSizes(availableSizes.filter((color) => color !== value));
    }
  }
  console.log(availableSizes)

  const brand = useSelector(selectUser)

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
  function available_size() {
    console.log(available_size)
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
    // return

    await updateFn({ ...data, available_sizes: ["S", "M"], display_image: File, brand_name: brand.brand_name })

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
            <input type="text" name="merchandise_name" id="brand-name" className={styles.input} placeholder="" required />

          </div>
          <div>
            <label htmlFor="" className={styles.label}>Display image</label> <br />
            <span className={styles.label} style={{fontSize:12}}>(This is how your product would be displayed on the shop page. Additional images can be added later)</span>

            <input type="file" name="display_image" id="brand-name" className={styles.input} placeholder="" required />

          </div>
          <div>
            <label htmlFor="" className={styles.label}>Description</label>

            <textarea type="text" name="merchandise_description" id="bio" placeholder="" className={styles.input} required></textarea>
          </div>
          <div>
            <label htmlFor="" className={styles.label}>Details </label> <br />
            <span className={styles.label} style={{fontSize:12}}>(Fill in additional details like highlights etc)</span>

            <textarea type="text" name="merchandise_details" id="bio" placeholder="" className={styles.input} required></textarea>
          </div>
          <div>
            <label htmlFor="" className={styles.label}>Category</label>
            <div className="pt-2">
              <select className={styles.input} name="merchandise_type" id="">
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
              <select className={styles.input} name="labels" id="">
                <option value="">Choose merch label</option>
                {
                  MERCH_FORM_DATA.labels.map((l) => <option key={l} value="l">{l}</option>)
                }

              </select>

            </div>

          </div>
          <label htmlFor="" className={styles.label}>Size Type</label>
          <select className={styles.input} name="size_type" id="" onChange={(e) => {
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
                    <input type='checkbox' className='w-4 h-4' id={s} onChange={sizeInputChange} value={s} />
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
            <input type="number" name="merchandise_price" id="mobile_number" className={styles.input} placeholder="" required />

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
