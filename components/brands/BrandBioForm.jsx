import React, {use, useState} from 'react';
import styles from '../../styles/brand-bio.module.css';
import BrandProfileInfoForm from './BrandProfileInfoForm';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectBrandUser } from '../../features/brands/brandUserSlice';

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
        <div className={styles.columnImage}>
            <img src="/alteclan_logo.jpg" alt="" className={styles.img}/>
        </div>

        <div className={styles.columnText}>
        <div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ml-3 text-sm font-normal">You have created a new brand account successfully.</div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>
      
            <form className={styles.form}>
            
                <h1 className={styles.greeting}>About Your Brand</h1>
                <p className={styles.login}>Fill in some of your brand details</p>

                <div>
                <label for="email" className="block mb-2 ml-12 text-sm font-medium text-black">Brand Name</label> 
                    <input type="text" onChange={e => setBrandName(e.target.value)} name="brand-name" id="brand-name" className={styles.input} placeholder="" required/>
                    
                </div>
                <div>
                <label for="brand_bio" className="block mb-2 ml-12 text-sm font-medium text-black">Brand bio</label> 
                    <textarea type="text" onChange={e => setbrandBio(e.target.value)} name="bio" id="bio" placeholder="" className={styles.input} required></textarea>
                </div>
                <div>
                <label for="email" className="block mb-2 ml-12 text-sm font-medium text-black">Brand logo</label> 
                    <input type="file" onChange={e => setbrandLogo(e.target.value)} name="logo" id="logo" placeholder="" className={styles.input} required/>
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
