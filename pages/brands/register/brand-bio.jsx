import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import {selectBrandUser} from "../../../features/brands/brandUserSlice"

import styles from "../../../styles/brand-bio.module.css";
import BrandBioForm from '../../../components/brands/BrandSignupForm';
import BrandSignupForm from '../../../components/brands/BrandSignupForm';
export default function Bio() {
  
  const data = [];
	const loading = false;
	const error = null;
	const brand_user = useSelector(selectBrandUser);
	const router = useRouter();

	useEffect(() => {
		if (brand_user === null) {
			router.push("/brands/register");
		}
	}, [brand_user]);

  return (
   <BrandSignupForm/>
  )
}
