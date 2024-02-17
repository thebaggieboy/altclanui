import React from 'react'

export default function ComingSoon() {
  return (
   
  <>
  <section x-data="{ isOpen: false }" class="w-full min-h-screen bg-white dark:bg-gray-900">
    <div class="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
        <nav class="md:flex md:items-center md:justify-between">
            <div class="flex items-center justify-between">
              

              
            </div>

            <div class="absolute inset-x-0 z-20 w-full px-6 py-8 mt-8 space-y-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 top-16 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center">
         
                <button class="w-full p-4 transition-colors duration-300 bg-gray-100 rounded-md dark:bg-gray-800 md:w-auto md:mx-6 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <div class="flex items-center justify-center -mx-1">
                        <p class="mx-1 text-sm text-gray-600 dark:text-white">Coming Soon on</p>

                        <svg class="w-6 h-6 mx-1 fill-gray-600 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                        </svg>
                    </div>
                </button>
            </div>
        </nav>

        <section class="flex items-center flex-1">
            <div class="flex flex-col w-full ">
                <h1 class="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                    <span class="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                        Coming
                    </span>

                    <span class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                        Soon
                    </span>
                </h1>

                <p class="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
                
🌟 Exciting News Coming Soon! 🌟

We're brewing something special behind the scenes. Stay tuned for our big reveal – it's going to be worth the wait!
 Keep checking back for updates. 🚀
                </p>

                <div class="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                    <input id="email" type="text" class="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2" placeholder="Email Address" />

                    <button class="px-8 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                        Notify Me
                    </button>
                </div>

                <p class="mt-8 text-center text-gray-700 dark:text-white text-md md:text-xl">Notify me when App is launched :)</p>
            </div>
        </section>

    </div>
</section>
  </>
  )
}
