import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BrandDiv() {
  return (
    <>
      <div className="py-16 bg-black">
        <p className=" mb-12 tracking-tight text-center max-w-[60rem] mx-auto  text-gray-200 px-2 sm:text-2xl dark:text-white">
          Welcome to our alternative fashion startup! Celebrate non-conformity,
          creativity, and self-expression through our curated collection of
          sustainable and ethical fashion. From vintage to goth, punk to
          bohemian, embrace your unique style with us.
        </p>

        <div className="grid place-items-center">
          <Link
            href="/brands/signup"
            className="flex items-center justify-center gap-x-2 px-5 py-3 text-base font-medium text-center bg-white rounded-lg text-dark hover:bg-black-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            <span>Signup as a brand</span> <Image src="/assets/arrow-right.svg" width={20} height={20} alt="arrow-right"/>
           
          </Link>
        </div>
      </div>
    </>
  );
}
