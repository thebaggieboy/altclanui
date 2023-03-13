import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'




export default function HeaderTab() {
 
  return (

<div className="text-sm flex justify-center font-medium text-center text-gray-900 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex">
        <li className="mr-2">
            <Link href="/brands" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Brands</Link>
        </li>
        <li className="mr-2">
            <Link href="/products" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Explore</Link>
        </li>
          <li className="mr-2">
            <Link href="/products?q=whats-new" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Whats New?</Link>
        </li>
     
        
    </ul>
</div>

    
  )
}
