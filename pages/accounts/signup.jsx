import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/login.module.css";
<<<<<<< HEAD
import { TokenContext } from '../../context/TokenContext';
import useBrands from "./../../hooks/useBrands"
export default function SignUp({id, req, res}) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    const [hashedPassword, setHashedPassword] = useState('')
    const [jwtToken, setJwtToken] = useState(''); 
    const router = useRouter();
    const { data, loading, error } = useBrands('http://127.0.0.1:8000/api/user/');
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const {token, addToken} = useContext(TokenContext);


    const submit = async(e) => {
        e.preventDefault();
        console.log("Signup button was clicked")
        await fetch('/api/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
         
            },
            body:JSON.stringify({email, password})
        })
       
     
        //await router.push('/profile')
    }
=======
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";

export default function SignUp(req, res) {
	const dispatch = useDispatch();
>>>>>>> 4d13d1323b5591c77829b9676af7a6e2cdd0cbc0

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	const submit = async (e) => {
		e.preventDefault();
		console.log("Signup button was clicked");
		await fetch("/api/signup/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				credentials: true,
			},
			body: JSON.stringify({ email, password }),
		}).then((res) => {
			if (res.ok) {
				dispatch(setUser({ email }));
				router.push("/profile");
			}
		});
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

						<div>
							{/* <label for="email" className="block mb-2 text-sm font-medium text-black">Your email</label> */}
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
