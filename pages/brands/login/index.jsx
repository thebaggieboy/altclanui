import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, FormEvent, useLayoutEffect, useEffect } from 'react'
//import styles from "../../../styles/login.module.css";
import styles from "./../../../styles/login.module.css"
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader"
import useLogin from '../../../hooks/useLogin';
import { USER_TYPES, selectUser, setUser, setUserType } from '../../../features/user/userSlice';
import Head from "next/head"
import { useSearchParams } from 'next/navigation';
import { selectUserEmail,  setUserEmail,  setUserEmailType } from "../../../features/user/userActiveEmail";
import {selectToken, setToken} from "../../../features/token/tokenSlice";


export default function Login(req, res) {
    const dispatch = useDispatch();
    const brand_user = useSelector(selectUser);
    const user_email = useSelector(selectUserEmail);
    const token = useSelector(selectToken);

    const router = useRouter();
    const searchParams = useSearchParams()
	const search = searchParams.get('user')

    const signupSuccess =  <div class="flex items-center text-center p-4 mb-4 text-sm text-green-800 border border-0 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
    </svg>
    <span class="sr-only">Info</span>
    <div>
    You have created a new account, please login to complete your profile
    </div>
  </div>
  
	console.log("Query params: ", search)

    useEffect(() => {
        if (brand_user !== null && brand_user?.brand_name == "") {
            router.push(`/brands/register/brand-bio`);
            
        }
        if (brand_user !== null && brand_user?.brand_name !== "" && brand_user?.brand_bio !== "" && brand_user?.brand_type !== "" && brand_user?.mobile_number !=="" && brand_user?.brand_logo !== "") {
            router.push(`/brands/profile/${brand_user?.id}?brand=${brand_user?.brand_name}`);
            
        }
    }, [brand_user, router])

    

    const { isIdle, isPending, error, mutateAsync: loginFn } = useLogin("https://altclan-brands-api-1-1.onrender.com/auth/jwt/create", loginSuccess, USER_TYPES.brand)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const inputChangeHandler = (e) => {
        const { name, value } = e.target
        setFormData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })

    }

    console.log(error)


    function loginEmail(){
		dispatch(setUserEmail(formData?.email))
	}
    async function loginSuccess() {
		console.log("Successful Login")
		const today = new Date();
		const oneMonthFromToday = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
		document.cookie = `user_type=brand; expires=${oneMonthFromToday.toUTCString()} Path=/`

		if(token !== null || token == ""){
			const arrayToken = token.split('.');
			const tokenPayload = JSON.parse(atob(arrayToken[1]));	
			console.log("Token Payload ID: ", tokenPayload?.user_id);
			const url = `https://altclan-brands-api-1-1.onrender.com/api/users/${tokenPayload?.user_id}`

		const res = await fetch(url, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${token}`,
				"Content-Type": "application/json"
			},
		})

		const data = await res.json()
	
		if (res.status >= 200 && res.status <= 209) {
			console.log("user fetch successful")
			console.log("Current User: ", data)
			dispatch(setUser(data))
		
			return data
			
		}
		
		const err = { ...data }
		throw { err }
		
			
		}
		


	}
    const submit = async (e) => {
        e.preventDefault();
        try {
            loginEmail()
			loginSuccess()
            await loginFn(formData)
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <>
     <Head>
       <title>Login as a brand </title>
            <meta charset="UTF-8" />
            <meta
              name="description"
              content="Login to your brand account."
            />
              <meta name="keywords"
                    content="altclan, altclan login" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/alteclan_logo.jpg" />
       </Head> 
        <div className="">
            <div className={styles.loginContainer}>
                <div className={styles.columnImage}>
                    <img src="/img/no-revisions.jpg" alt="" className={styles.img} />
                </div>

                <div className={styles.columnText}>
                    <form className={styles.form} onSubmit={submit}>
                        <Link href="#" className={styles.head}>
                            <img
                                className={styles.logo}
                                src="/alteclan_logo.jpg"
                                alt="logo"
                            />
                            {/* Altclan     */}
                        </Link>
                        <h1 className={styles.greeting}>Login to your brand account</h1>
                        <p className={styles.login}>Continue managing your brand and community</p>
                        {search == "success" ? signupSuccess : ""}
                        <div>
                            {/* <label for="email" className="block mb-2 text-sm font-medium text-black">Your email</label> */}
                            {error !== null && (
                                <div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <span class="sr-only">Info</span>
                                    <div class="ml-3 text-sm text-center font-medium">
                                        {error?.non_field_errors}                                    </div>

                                </div>
                            )}
                            <input type="email" onChange={inputChangeHandler} name="email" id="email" className={styles.input} placeholder="name@company.com" required />
                        </div>
                        <div>
                            {/* <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label> */}
                            <input type="password" onChange={inputChangeHandler} name="password" id="password" placeholder="•••••••" className={styles.input} required />
                        </div>
                        <div>

                        </div>

                        <button disabled={isPending} type="submit" className={styles.submit}>
                            {
                                isPending ? <Loader /> : "Login"
                            }
                        </button>

                        <p className={styles.alternative}>
                            Dont have an account?
                            <Link href="/brands/register" className={styles.link}>Signup here</Link>
                        </p>
                        <p className={styles.alternative}>
                            Forgot your password?
                            <Link href="/brands/register" className={styles.link}>Reset Password</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
