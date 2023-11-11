import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, FormEvent } from 'react'
//import styles from "../../../styles/login.module.css";
import styles from "./../../../styles/login.module.css"
import signUp from "../../../lib/brandSignup"
import { useDispatch, useSelector } from "react-redux";
import { selectBrandUser, setBrandUser } from "../../../features/brands/brandUserSlice";
import Loader from "../../../components/Loader"

export function LoginError() {
	return (
		<div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
			<svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
			</svg>
			<span class="sr-only">Info</span>
			<div class="ml-2 text-sm text-center font-medium">
				You already have an account with us  <Link href="/accounts/login" class="font-semibold underline hover:no-underline">Login</Link> to continue.
			</div>

		</div>
	)
}


export default function SignUp(req, res) {
	const dispatch = useDispatch();
	const brand_user = useSelector(selectBrandUser);
	const router = useRouter();

	if (brand_user !== null) {
		router.push("/brands/register/brand-bio");
	}
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [error, setError] = useState(null);
	const [status, setStatus] = useState("idle")

	const emailErr = error?.email || null;
	const passwordErr = error?.password || error?.password2 || null

	console.log(passwordErr)

	const submit = async (e) => {
		e.preventDefault();
		try {
			if (password !== password2) {
				throw { err: { password: "Passwords do not match" } }
			}
			setStatus("loading")
			const data = await signUp(email, email, password, password2);
			dispatch(setBrandUser({ email }))
		} catch (error) {
			setError(error.err)
			setTimeout(() => {
				setError(null)
			}, 4000)
		} finally {
			setStatus("idle")
		}
	}
  return (
    <div className="">
        <div className={styles.loginContainer}>
        <div className={styles.columnImage}>
            <img src="/img/hanger.jpg" alt="" className={styles.img}/>
        </div>

        <div className={styles.columnText}>
            <form className={styles.form}  onSubmit={submit}>
            
                <h1 className={styles.greeting}>Join the clan</h1>
                <p className={styles.login}>Create a brand account to become part of our community</p>

                <div>
                    {/* <label for="email" className="block mb-2 text-sm font-medium text-black">Your email</label> */}
					{emailErr !== null && (
								<LoginError />
							)}
							{passwordErr !== null && 
				<div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
			<svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
			</svg>
			<span class="sr-only">Info</span>
			<div class="ml-2 text-sm text-center font-medium">
				{passwordErr}  
			</div>

		</div>}
                    <input type="email" onChange={e => setEmail(e.target.value)} name="email" id="email" className={styles.input} placeholder="name@company.com" required/>
                </div>
                <div>
                    {/* <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label> */}
                    <input type="password" onChange={e => setPassword(e.target.value)} name="password" id="password" placeholder="•••••••" className={styles.input} required/>
                </div>

                	<div>
							{/* <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label> */}
							<input
								type="password"
								onChange={(e) => setPassword2(e.target.value)}
								name="password2"
								id="password2"
								placeholder="Confirm Password"
								className={styles.input}
								required
							/>
						</div>
                <div>

                </div>

				<button disabled={status === "loading"} type="submit" className={styles.submit}>
							{
								status === "loading" ? <Loader /> : status === "idle" && "Signup"
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
  )
}
