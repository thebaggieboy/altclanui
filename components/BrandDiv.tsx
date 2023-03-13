import React from 'react'
import Link from 'next/link'

export default function BrandDiv() {
  return (

<>
<div className="bg-black p-10">
<p className="mb-4 mt-5 p-10 text-1xl  text-center tracking-tight text-gray-200   dark:text-white">Welcome to our alternative fashion startup! Celebrate non-conformity, creativity, and self-expression through our curated collection of sustainable and ethical fashion. From vintage to goth, punk to bohemian, embrace your unique style with us.</p>

<div className="flex justify-center">
<Link href="/brands/signup" className="inline-flex text-center items-center justify-center px-5 py-3 text-base font-medium text-center text-dark bg-white rounded-lg hover:bg-black-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Signup as a brand
    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</Link>
</div>
</div>
</>

  )
}
