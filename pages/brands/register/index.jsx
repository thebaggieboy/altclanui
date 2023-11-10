import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, FormEvent } from 'react'
//import styles from "../../../styles/login.module.css";
import styles from "./../../../styles/login.module.css"
import signUp from "../../../lib/brandSignup"
import { useDispatch, useSelector } from "react-redux";
import { selectBrandUser, setBrandUser } from "../../../features/brands/brandUserSlice";
import Loader from "../../components/Loader"

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
                      Already have an account? 
                      <Link href="/accounts/login" className={styles.link}>Login here</Link>
                  </p>
              </form>
        </div>
        </div>
    </div>
  )
}
