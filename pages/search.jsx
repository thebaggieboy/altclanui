import {React, useState, useEffect, useContext} from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import {CartContext} from '../context/CartContext'
import HeaderTab from './../components/headers/HeaderTab'
import Category from './../components/Category'
import useBrands from "../hooks/useBrands"
const categories = [
  // More categories...
]
import useDebounce from '../hooks/useDebounce'
export default function Search({ _id, merchandise_name, price, picture }) {
  const {cart, addToCart} = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  // Results of the search query in an array
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [searchResult, setSearchResult] = useState([])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const { data, loading, error } = useBrands('https://altclan-brands-api.onrender.com/api/merchandises/')
  //const { data, loading, error } = useBrands('https://altclan-api-v1.onrender.com/api/merchandises/')
  //const data = fetch('https://altclan-api-v1.onrender.com/api/merchandises/')
 
 


  useEffect(() => {

    if (searchQuery !== null) {
      const results = data?.filter((product) =>
        product.merchandise_name.toLowerCase().includes(searchQuery.toLowerCase())
        
      );
      console.log(results)
      setSearchResult(results);


    } else {
      setSearchResult([]);
    }
  }, [searchQuery, data]);



  return (
   
  <div className="pt-2 m-2 ">
      <div className="mx-auto p-5 ">
        <div className="flex items-center" >   
            <label for="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                
                </div>
                <input type="text" onChange={handleSearchChange} value={searchQuery} id="simple-search" className="bg-gray-50 p-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="brand, merch, category" required/>
            </div>
      
        </div>
  </div>

  {searchQuery && searchResult?.map((product) => (
           <section key={product.id } aria-labelledby="products-heading" className="pb-24">
           <div className="mx-auto max-w-2xl  px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
									<div className=" grid grid-cols-2 gap-x-6 gap-y-10  lg:grid-cols-4 xl:gap-x-8">
										{product.map(
											({
												id,
												display_image,
												imageAlt,
												merchandise_name,
												category,
												price,
											}) => (
												<div key={id} className="group relative">
													<div className="min-h-100 aspect-h-1 aspect-w-1 w-full overflow-hidden  lg:aspect-none group-hover:opacity-75 lg:h-80">
														<Link href={`/products/${id}`}>
															<img
																src={display_image}
																alt={imageAlt}
																className="h-full w-full object-cover object-center lg:h-full lg:w-full"
															/>
														</Link>
													</div>
													<Link href={`/products/${id}`}>

													
													<div className="flex pt-3 justify-between">
														<div>
														<div className="container text-gray-500 text-xs">
																{category}
															</div>
															<h3 className="text-sm text-gray-800">
																{/* An element here was covering the whole card making the add to cart unclickable */}
																{merchandise_name}
															</h3>
															
															<p className="text-md fw-bold">
																₦{price}
															</p>

														
														</div>

												
													</div>
													</Link>
												</div>
											)
										)}
									</div>
								</div>
         </section>
        ))}

  <div className='pt-10'>
    
  </div>
</div>

  )
}
