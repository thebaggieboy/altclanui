import React from 'react';
import useData from './../hooks/useData'
import { CartContext } from '../context/CartContext'
import { ProductContext } from '../context/ProductContext'
import Link from 'next/link'
import styles from './../styles/component5.module.css'

const SponsoredBrands = () => {
    //const { data, loading, error } = useData('https://altclan-api-v1.onrender.com/api/merchandises/');
    const { data, loading, error } = useData('http://127.0.0.1:8000/api/brands/');
    if (loading) {
        return <div className="text-center p-5 mt-5">
          <br/>
    
    <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
        <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
            </svg>
        </div>
        <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
    </div>
    
      }

    return (
        <div>
            <h1 className="text-3xl text-center capitalize">Featured Brands</h1>
                        <div className={styles.row}>
                {data.map((product) => (
                    <div key={product.id}>
                        <a href={product.href}>
                            <div className={styles.imageCol}>
                                <div className={styles.card}>
                                    <img src={product.brand_logo} alt="" className={styles.productImage}/>

                                    <h1 className={styles.name}>
                                        {product.brand_name}
                                    </h1>


                                    <p className={styles.details}>
                                        {product.brand_bio}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SponsoredBrands;
