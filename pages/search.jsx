import React from 'react'

import HeaderTab from '@/components/headers/HeaderTab'
import Category from '@/components/Category'
const categories = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    followers: '48k',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    followers: '35k',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    followers: '89.4k',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a brandivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    followers: '1m',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More categories...
]

export default function Search() {
  return (
   
  <div>
    <HeaderTab/>
      <div className="p-5 mx-auto mt-2 ">

      <form>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
      
        <div>
              <input type="text"  id="email" className="shadow-sm bg-gray-50 border p-3 rounded w-full border-gray-300 shadow-sm" placeholder="Brands, Merchandises ..." required />
          </div>
    </div>
</form>


<Category/>

    </div>
  </div>
  )
}
