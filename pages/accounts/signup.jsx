import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/login.module.css";
import { TokenContext } from "../../context/TokenContext";
import useBrands from "./../../hooks/useBrands";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../features/user/userSlice";
import signUp from "../../lib/signUp";

export  function LoginError(){
	return (
		<div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div class="ml-3 text-sm text-center font-medium">
    You already have an account with us  <a href="/accounts/login" class="font-semibold underline hover:no-underline">Login</a> to continue.
  </div>

</div>
	)
}

export default function SignUp() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const router = useRouter();

	if (user !== null) {
		router.push("/profile");
	}

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	

	const emailErr = error?.email[0] || null;

	console.log(emailErr);

	const submit = async (e) => {
		e.preventDefault();
		console.log("Signup button was clicked");
		const res = await signUp(email, password);
		const data = await res.json();
		if (data.err) {
			setError(data.err);
			return;
		}
		if (res.status >= 200 && res.status <= 209) {
			dispatch(setUser({ email }));
		}
	};

	return (
		<div className="">
			<div className={styles.loginContainer}>
				<div className={styles.columnImage}>
					<img
						src="https://media.everlane.com/image/upload/c_fill,w_828,ar_380:655,q_auto,dpr_1.0,f_auto,fl_progressive:steep/Modal_Desktop-05102022_pyajh1"
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

						<h1 className={styles.greeting}>Welcome to Altclan</h1>
						<p className={styles.login}>Complete your sign up to join</p>

						<div className="">
							{/* <label for="email" className="block mb-2 text-sm font-medium text-black">Your email</label> */}
							{emailErr !== null && (
							<LoginError/>
							)}
							<input
								type="email"
								onChange={(e) => setEmail(e.target.value)}
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
								onChange={(e) => setPassword(e.target.value)}
								name="password"
								id="password"
								placeholder="•••••••"
								className={styles.input}
								required
							/>
						</div>
						<div></div>

						<button type="submit" className={styles.submit}>
							Create an account
						</button>

						<p className={styles.alternative}>
							Already have an account?
							<Link href="/accounts/login" className={styles.link}>
								Login here
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
