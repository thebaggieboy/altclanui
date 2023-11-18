import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, FormEvent } from 'react'
//import styles from "../../../styles/login.module.css";
import styles from "./../../../styles/login.module.css"
import { useDispatch, useSelector } from "react-redux";
import { selectBrandUser, setBrandUser } from "../../../features/brands/brandUserSlice";
import Loader from "../../../components/Loader"
import useLogin from '../../../hooks/useLogin';
import { LoginError } from '../../accounts/login';
import { USER_TYPES } from '../../../features/user/userSlice';
export default function Login(req, res) {
    const dispatch = useDispatch();
    const brand_user = useSelector(selectBrandUser);
    const router = useRouter();

    if (brand_user !== null) {
        router.push("/brands/register/brand-bio");
    }


    const { isIdle, isPending, error, mutateAsync: loginFn } = useLogin("https://altclan-brands-api.onrender.com/dj-rest-auth/login/", setBrandUser, USER_TYPES.brand)

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
        }
    };


    return (
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
                        <h1 className={styles.greeting}>Join the clan</h1>
                        <p className={styles.login}>Create a brand account to become part of our community</p>

                        <div>
                            {/* <label for="email" className="block mb-2 text-sm font-medium text-black">Your email</label> */}
                            {error !== null && (
                                <LoginError />
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
                                isPending ? <Loader /> : "login"
                            }
                        </button>

                        <p className={styles.alternative}>
                            Dont have an account?
                            <Link href="/brands/register" className={styles.link}>Signup here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
