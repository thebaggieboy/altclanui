import React, { useState } from 'react'

export default function FeaturedProduct({data}) {
  const [liked, setLiked] = useState(false);
	
  const { merchandise_name, price, display_image, id } = data;


  return (
    <>
    <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2">
        <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">{merchandise_name}</h1>
    
    </div>

    <img class="object-cover w-full h-64 mt-2" src={display_image} alt="NIKE AIR"/>

    <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
        <p class="text-sm font-bold text-white">${price}</p>
        <button class="px-2 py-1 text-xs font-semibold text-black uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
    </div>
</div>
    </>
  )
}
