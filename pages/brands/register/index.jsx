import React from 'react'
import BrandSignUpForm from "@/components/BrandSignUpForm"
import BrandSignupTab from "@/components/BrandSignupTab"


export default function Register() {
  return (
    <div>

      <BrandSignupTab/>

<div className="container mt-3 p-5  lead text-sm justify-center text-center">
<p>     Join our community as a brand member and start expanding your creative audience. 
  To do so proceed by create an account with your brands email address or work email.    </p> 
  </div>

        <BrandSignUpForm/>
    </div>
  )
}
