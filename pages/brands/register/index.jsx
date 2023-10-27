import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, FormEvent } from 'react'
import styles from "../../../styles/login.module.css";
import signUp from "../../lib/brandSignup"
import { useDispatch, useSelector } from "react-redux";
import { selectBrandUser, setBrandUser } from "../../../features/brands/brandUserSlice";

export default function SignUp(req, res) {
	const dispatch = useDispatch();
	const user = useSelector(selectBrandUser);
	const router = useRouter();

	if (user !== null) {
		router.push("/brands/profile");
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
			dispatch(setBrandUser({ email }));
		}
	};


  return (
    <div className="">
        <div className={styles.loginContainer}>
        <div className={styles.columnImage}>
            <img src="/alteclan_logo.jpg" alt="" className={styles.img}/>
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

                </div>

                <button type="submit" className={styles.submit}>
                   Register
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
