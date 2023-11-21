import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import {selectBrandUser} from "../../../features/brands/brandUserSlice"

import styles from "../../../styles/brand-bio.module.css";
import BrandBioForm from '../../../components/brands/BrandSignupForm';
import BrandMerchForm from '../../../components/brands/BrandMerchForm';
export default function Bio() {
  
  const data = [];
	const loading = false;
	const error = null;
	const brand_user = useSelector(selectBrandUser);
	const router = useRouter();




  return (
   <BrandMerchForm/>
  )
}
