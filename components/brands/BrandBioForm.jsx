import React, {use, useState} from 'react';
import styles from '../../styles/login.module.css';
import BrandProfileInfoForm from './BrandProfileInfoForm';
import Link from 'next/link';
const BrandBioForm = (props) => {
    const [brandName, setBrandName] = useState('');
    const [brandBio, setbrandBio] = useState('');
    const [brandLogo, setbrandLogo] = useState('');
    
    const [step, setStep] = useState(1);

    const nextStep = ()=>{
      setStep(step + 1)
    }
  
    const prevStep = ()=>{
      setStep(step - 1)
    }
  
    const handleChange = ()=>{
  
    }

    const submit =()=>{
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
