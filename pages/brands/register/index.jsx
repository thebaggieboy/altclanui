import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, FormEvent, useEffect } from 'react'
//import styles from "../../../styles/login.module.css";
import styles from "./../../../styles/login.module.css"
import { useDispatch, useSelector } from "react-redux";
import { selectBrandUser, setBrandUser } from "../../../features/brands/brandUserSlice";
import Loader from "../../../components/Loader"
import useSignUp from '../../../hooks/useSignUp';
import { USER_TYPES, selectUser, setUser, setUserType } from '../../../features/user/userSlice';
import Head from "next/head"
import { useSearchParams } from 'next/navigation';


export default function SignUp(req, res) {
	const dispatch = useDispatch();
	const brand_user = useSelector(selectUser);
	const router = useRouter();
	const search = useSearchParams()
	search.get('user')
	console.log("Query params: ", search)
	const signupSuccess =    <div class="flex items-center text-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
		<svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
		  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
		</svg>
		<span class="sr-only">Info</span>
		<div>
		  <span class="font-medium">Account creation successful!</span> You have created a new account, please login to complete your profile
		</div>
	  </div>
	useEffect(() => {
		
		if (brand_user !== null) {
			router.push(`/brands/dashboard/${brand_user?.id}?q=${brand_user?.brand_user_name}`)
		}
	}, [brand_user, router])

	async function signUpSuccess(user) {
		await router.push("/brands/login?user=success");
	}

	const { isIdle, isPending, error, mutateAsync: signUpFn } = useSignUp("https://altclan-api-v1.onrender.com/dj-rest-auth/registration/", signUpSuccess, USER_TYPES.brand)

	const [formErr, setFormErr] = useState(error)
	const [formData, setFormData] = useState({
		email: "",
		password1: "",
		password2: ""
	})

	const { email, password1, password2 } = formData

	const emailErr = formErr?.email || null;
	const passwordErr = formErr?.password1 || formErr?.password2 || formErr?.password || null

	const inputChangeHandler = (e) => {
		const { name, value } = e.target
		setFormData((prevValue) => {
			return {
				...prevValue,
				[name]: value
			}
		})

	}

	const submit = async (e) => {
		e.preventDefault();
		try {
			if (password1 !== password2) {
				throw { password: ["Passwords do not match"] }
			}
			await signUpFn(formData)
		} catch (error) {
			setFormErr(error)
			console.log(error)
		}
	};

	return (
		<>
		<Head>
       <title>Become a brand </title>
            <meta charset="UTF-8" />
            <meta
              name="description"
              content="You can start creating your brand account now"
            />
              <meta name="keywords"
                    content="altclan, altclan login, login, brands, fashion, community, aesthetics, enigmas, arts, merchandises,  clothing, rings, accessories" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/alteclan_logo.jpg" />
       </Head> 
		<div className="">
			<div className={styles.loginContainer}>
				<div className={styles.columnImage}>
					<img src="/img/hanger.jpg" alt="" className={styles.img} />
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
						<h1 className={styles.greeting}>Join the clan</h1>
						<p className={styles.login}>Create a brand account to become part of our community</p>
						
						<div>
							{/* <label for="email" className="block mb-2 text-sm font-medium text-black">Your email</label> */}
							{emailErr !== null && (
								<div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
									<svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
										<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
									</svg>
									<span class="sr-only">Info</span>
									<div class="ml-2 text-sm text-center font-medium">
										{formErr.email}  <Link href="/accounts/login" class="font-semibold underline hover:no-underline">Login</Link> to continue.
									</div>
								</div>
							)}
							{formErr !== null && (
								<div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
									<svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
										<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
									</svg>
									<span class="sr-only">Info</span>
									<div class="ml-2 text-sm text-center font-medium">
										{formErr.non_field_errors} Try another password to continue.
									</div>
								</div>
							)}

							{passwordErr !== null &&
								<div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
									<svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
										<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
									</svg>
									<span class="sr-only">Info</span>
									<div class="mx-auto text-sm text-center font-medium">
										{passwordErr.map((err) => (
											<p key={err} className='text-center'>{err}</p>
										))}
									</div>

								</div>}
							<input type="email"
								onChange={inputChangeHandler}
								name="email" id="email"
								className={styles.input}
								placeholder="name@company.com" required />
						</div>
						<div>
							{/* <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label> */}
							<input type="password"
								onChange={inputChangeHandler}
								name="password1"
								id="password"
								placeholder="•••••••"
								className={styles.input} required />
						</div>

						<div>
							{/* <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label> */}
							<input
								type="password"
								onChange={inputChangeHandler}
								name="password2"
								id="password2"
								placeholder="Confirm Password"
								className={styles.input}
								required
							/>
						</div>
						<div>

						</div>

						<button disabled={isPending} type="submit" className={styles.submit}>
							{
								isPending ? <Loader /> : "Signup"
							}
						</button>

						<p className={styles.alternative}>
							Already have a brand account?
							<Link href="/brands/login" className={styles.link}>Login here</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
		</>
	)
}
