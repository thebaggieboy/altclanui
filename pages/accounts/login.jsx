import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function SignUp() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const router = useRouter();

    const submit = async(e) => {
        e.preventDefault();
        console.log("Button was clicked")
        await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email, password})
        })


        //await router.push('/accounts/login')
    }



  return (
    <div className="">
        <section className="">
  <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
      <Link href="#" className="flex items-center mb-6 text-2xl font-semibold text-black">
      <img className="w-8 h-8 mr-2 rounded" src="/alteclan_logo.jpg" alt="logo"/>
          Altclan    
      </Link>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-black">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2x">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6"  onSubmit={submit}>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                      <input type="email" onChange={e => setEmail(e.target.value)} name="email" id="email" className="sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-100 dark:border-black dark:placeholder-black dark:text-black dark:focus:ring-black dark:focus:border-black" placeholder="name@company.com" required/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                      <input type="password" onChange={e => setPassword(e.target.value)} name="password" id="password" placeholder="•••••••" className="sm:text-sm rounded-lg focus:ring-white focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-black dark:placeholder-black dark:text-black dark:focus:ring-black dark:focus:border-black" required/>
                  </div>
                  <div>

                  </div>

                  <button type="submit" className="w-full text-gray-900 bg-white border  focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2">
                                Login
                    </button>
   
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Dont have an account? 
                      <Link href="/accounts/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}
