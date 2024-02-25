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
         
<form class="">
  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your review</label>
  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
</form>
<button
							
								className="mt-10 flex w-full items-center justify-center rounded-md border border-black bg-black px-8 py-3 text-base font-medium text-white  focus:ring-black focus:ring-offset-2"
							>
							Submit review
							</button>
        </section>
    </>
  )
}
