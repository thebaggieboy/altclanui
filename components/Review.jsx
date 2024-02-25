import React from 'react'
import styles from '../styles/brand-bio.module.css'

export default function Create() {
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
    
  return (
    <>
    <section style={{padding:20}}>
          <div>
            <label htmlFor="" className={styles.label}>Write your review</label>
            <textarea type="text" onChange={inputChangeHandler} name="merchandise_name" id="brand-name" className={styles.input} placeholder="" required></textarea>

          </div>
        </section>
    </>
  )
}
