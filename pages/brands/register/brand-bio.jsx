import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";


import BrandSignupForm from '../../../components/brands/BrandSignupForm';
import { selectUser } from '../../../features/user/userSlice';
export default function Bio() {

	const data = [];
	const loading = false;
	const error = null;
	const brand_user = useSelector(selectUser);
	const router = useRouter();


	useEffect(() => {
		if (brand_user === null) {
			router.push("/brands/register");
		}

	}, [brand_user]);

	useEffect(() => {
		if (brand_user?.brand_name !== "" && brand_user?.brand_bio !== ""  && brand_user?.brand_type !== "" && brand_user?.mobile_number !== "" && brand_user?.brand_Logo == "" ) {
			router.push("/brands/register/brand-logo/");
		}
		if (brand_user?.brand_name !== "" && brand_user?.brand_bio !== ""  && brand_user?.brand_type !== "" && brand_user?.mobile_number !== "" && brand_user?.brand_Logo !== "" ) {
			router.push(`/brands/profile/${brand_user?.id}?brand=${brand_user?.brand_name}`);
		}

	}, [brand_user]);

	return (
		<BrandSignupForm />
	)
}
