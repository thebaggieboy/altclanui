import React, {use, useState} from 'react';
import styles from '../../styles/brand-bio.module.css';
import BrandProfileInfoForm from './BrandProfileInfoForm';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectBrandUser } from '../../features/brands/brandUserSlice';
const brand_type = [
    {
      type:"Clothing & apparel",
    },
    {
      type:"Accessories",
    },
    {
      type:"Arts",
    },
    {
      type:"Footwears",
    },
  ]

const BrandBioForm = (props) => {
    const [brandName, setBrandName] = useState('');
    const [brandBio, setbrandBio] = useState('');
    const [brandLogo, setbrandLogo] = useState('');
    const brandUserData = useSelector(selectBrandUser);

    
    const [step, setStep] = useState(1);

    const nextStep = ()=>{
      setStep(step + 1)
    }
  
    const prevStep = ()=>{
      setStep(step - 1)
    }
  
    const handleChange = ()=>{
  
    }

    const submit =(e)=>{
        e.preventDefault()
        console.log("Brand Bio Form Submit clicked")
    }



    return (
        <div>
       <div className="">
        <div className={styles.loginContainer}>
      

        <div className={styles.columnText}>
        <div class="flex items-center text-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Account creation successful!</span> You have created a new brand, please fill in the form to get start setting up your brand profile.
  </div>
</div>
      
            <form className={styles.form}>
            
                <h1 className={styles.greeting}>About Your Brand</h1>
                <p className={styles.login}>Fill in some of your brand details</p>

                <div>
                <label htmlFor="" className={styles.label}>Brand name</label>
                    <input type="text" onChange={e => setBrandName(e.target.value)} name="brand-name" id="brand-name" className={styles.input} placeholder="" required/>
                    
                </div>
                <div>
                <label htmlFor="" className={styles.label}>Brand bio</label>

                    <textarea type="text" onChange={e => setbrandBio(e.target.value)} name="bio" id="bio" placeholder="" className={styles.input} required></textarea>
                </div>
                <div>
                    <label htmlFor="" className={styles.label}>Brand type</label>
                  <div className="pt-2">
                  <select className={styles.input} name="brand_type" id="">
                        <option value="select">Choose community type</option>
                        <option value="clothing">Clothing & apparel</option>
                        <option value="accessories">Accessories</option>
                        <option value="arts">Arts & Aesthetics</option>
                        <option value="footwears">Footwears</option>
                    </select>
                
                  </div>
                    
                </div>
                <div>

                </div>

                <button type='submit'  className={styles.submit}>
                    <button onClick={props.nextStep}>Continue</button>
                </button>
   
                  <p className={styles.alternative}>
                      Already have an account? 
                      <Link href="/accounts/login" className={styles.link}>Login here</Link>
                  </p>
              </form>
        </div>
        </div>
    </div>
        </div>
    );
}

export default BrandBioForm;
