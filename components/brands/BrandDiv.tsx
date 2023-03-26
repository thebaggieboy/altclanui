import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BrandDiv() {
  return (
    <>
      <div className="py-16 bg-#ddd">
        <p className="  text-center max-w-[60rem] mx-auto  text-black p-2 sm:text-3xl">
          Welcome to our alternative fashion startup! Celebrate non-conformity,
          creativity, and self-expression through our curated collection of
          sustainable and ethical fashion. From vintage to goth, punk to
          bohemian, embrace your unique style with us.
        </p>
 <br />
        <div className="grid place-items-center">
          <Link
            href="/brands/signup"
            className="flex items-center justify-center gap-x-2 px-5 py-3 text-base font-medium text-center bg-black rounded-lg text-white hover:bg-black-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            <span>Signup as a brand</span> 
           
          </Link>
        </div>
      </div>
    </>
  );
}
