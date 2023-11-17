import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { USER_TYPES, selectUser, setUser } from "../../features/user/userSlice";
import login from "../../lib/login";
import Loader from "../../components/Loader";
import useLogin from "../../hooks/useLogin";

export function LoginError() {
	return (
		<div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
			<svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
			</svg>
			<span class="sr-only">Info</span>
			<div class="ml-3 text-sm text-center font-medium">
				Email or password is incorrect.
			</div>

		</div>
	)
}

export default function SignUp() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const router = useRouter();
	const [formErr, setFormErr] = useState()

	if (user !== null) {
		router.push("/products");
	}


	const { isIdle, isPending, error, mutateAsync: loginFn } = useLogin("https://altclan-api-v1.onrender.com/dj-rest-auth/login/",
		setUser, USER_TYPES.shopper)

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

	const submit = async (e) => {
		e.preventDefault();
		try {
			await loginFn(formData)
		} catch (error) {
			console.log(error)
			setFormErr(error)
		}
	};


	return (
		<div className="">
			<div className={styles.loginContainer}>
				<div className={styles.columnImage}>
					<img
						src="/img/faith.jpg"
						alt=""
						className={styles.img}
					/>
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

						<h1 className={styles.greeting}>Login to your account</h1>
						<p className={styles.login}>Complete your login to continue</p>


						<div className="">
							{/* <label for="email" className="block mb-2 text-sm font-medium text-black">Your email</label> */}
							{error !== null && (
								<div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
								<svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
									<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
								</svg>
								<span class="sr-only">Info</span>
								<div class="ml-3 text-sm text-center font-medium">
									{formErr.non_field_errors}
								</div>
					
							</div>
							)}
							<input
								type="email"
								onChange={inputChangeHandler}
								name="email"
								id="email"
								className={styles.input}
								placeholder="name@company.com"
								required
							/>
						</div>
						<div>
							{/* <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label> */}
							<input
								type="password"
								onChange={inputChangeHandler}
								name="password"
								id="password"
								placeholder="•••••••"
								className={styles.input}
								required
							/>
						</div>

						<div></div>

						<button disabled={isPending} type="submit" className={styles.submit}>
							{
								isPending ? <Loader /> : "login"
							}
						</button>

						<p className={styles.alternative}>
							Dont have an account?
							<Link href="/accounts/signup" className={styles.link}>
								Signup here
							</Link>
						</p>
						<p className={styles.alternative}>
							Forgot your password?
							<Link href="/accounts/login" className={styles.link}>
								Reset Password
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
