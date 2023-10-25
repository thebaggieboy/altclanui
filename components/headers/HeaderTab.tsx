import Link from 'next/link'
export default function HeaderTab() {
 
  return (

<div className="flex justify-center  text-sm font-medium text-center text-gray-900 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex">
        <li className="mr-2">
            <Link href="/brands" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-gray-700 dark:hover:text-gray-300">Brands</Link>
        </li>
        <li className="mr-2">
            <Link href="/products" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-gray-700 dark:hover:text-gray-300">Explore</Link>
        </li>
          <li className="mr-2">
            <Link href="/collections" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 text-gray-700 hover:border-gray-300 dark:hover:text-gray-300">Categories</Link>
        </li>
     
        
    </ul>
</div>

    
  )
}
