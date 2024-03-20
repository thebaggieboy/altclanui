import React from 'react'

export async function getServerSideProps(context) {
  const id = context.params.id
  const res = await fetch(`https://altclan-brands-api.onrender.com/api/blog/${id}`)
  //const res = await fetch(`http://127.0.0.1:8000/api/brand_profile/${id}`);
  const data = await res.json()
  console.log(data)

  return {
    props: {blog:data}
  }

}


export default function Detail({blog}) {
  return (
    <>
 
<aside aria-label="Recent Posts" class="mx-auto mt-10 max-w-screen-xl py-20">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
  
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">{blog.title}</h2>
      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">{blog.text}</p>
    </div>
   
    <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">

      <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
        </a>

        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">April 2, 2022</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="active:text-rose-600 transition duration-100 hover:text-rose-500">The Pines and the Mountains</a>
          </h2>

          <p class="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">Read more</a>
          </div>
        </div>
      </article>
     
      <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
        </a>

        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">April 2, 2022</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="active:text-rose-600 transition duration-100 hover:text-rose-500">The Coding Mania</a>
          </h2>

          <p class="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">Read more</a>
          </div>
        </div>
      </article>
 
      <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" loading="lazy" alt="" class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
        </a>

        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">April 2, 2022</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="active:text-rose-600 transition duration-100 hover:text-rose-500">Architectural Warfare</a>
          </h2>

          <p class="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">Read more</a>
          </div>
        </div>
      </article>
    
      <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" loading="lazy" alt="" class="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200" />
        </a>

        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">April 2, 2022</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="active:text-rose-600 transition duration-100 hover:text-rose-500">Blues in Architechture</a>
          </h2>

          <p class="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint necessitatibus molestias explicabo.</p>

          <div>
            <a href="#" class="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600">Read more</a>
          </div>
        </div>
      </article>
 
    </div>
  </div>
</aside>

    </>
  )
}
