import React from 'react'
import Link from 'next/link'
export default function BrandSignUpForm() {
  return (
    <div className="w-100 p-20 ">
        <div className="p-10 items-center text-center">
       
        <ol className="flex items-center w-full p-10 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-10 ">
    <li className="flex items-center text-blue-600 dark:text-blue-500">
        <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
        </span>
        Account <span className="hidden sm:inline-flex sm:ml-2">Info</span>
        <svg className="w-3 h-3 ml-2 sm:ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
        </svg>
    </li>
    <li className="flex items-center">
        <span className="flex text-blue-600 items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        Bio<span className="hidden sm:inline-flex sm:ml-2"></span>
        <svg className="w-3 h-3 ml-2 sm:ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
        </svg>
    </li>
    <li className="flex items-center">
        <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        Contact 
    </li>
</ol>

        </div>

<section className="p-10">

<form className="p-5">
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What is the name of your brand?</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@brand.com" required />
  </div>
  <div className="mb-6">
  
<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Brand Bio</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@brand.com" required />
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
   
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
 
  <button
            type="submit" 
                className="mt-10 flex w-full items-center justify-center rounded-md border border-black bg-black py-3 px-8 text-base font-medium text-dark  focus:ring-black focus:ring-offset-2"
              >
                Create Account
              </button>
</form>
    
</section>

    </div>
  )
}
