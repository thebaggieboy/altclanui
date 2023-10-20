import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import styles from "../../../styles/login.module.css";
import BrandBioForm from '../../../components/brands/BrandSignupForm';
import BrandSignupForm from '../../../components/brands/BrandSignupForm';
export default function Bio() {
    

  return (
   <BrandSignupForm/>
  )
}
