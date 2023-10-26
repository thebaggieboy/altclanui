import Link from "next/link";
import React, { useState, useContext } from "react";
import { CartContext } from './../context/CartContext'
import { ProductContext } from "./../context/ProductContext";


export default function Cart() {
    const [show, setShow] = useState(false);
    const { cart } = useContext(CartContext);
    const {selectedProducts} = useContext(ProductContext)
    

    if (cart.length < 1) {
      return <>
      <div className="text-center text-black-700 p-10 mt-10 mb-10">
      <p>There are no items in your cart</p><br/>
      <button className="bg-black bg-rounded p-3 text-white"> <Link href="/products">Start shopping</Link> </button>
      </div>
      </>
    }

    return (
        <>

       <section className="bg-gray-100 py-6 sm:py-16 lg:py-20">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-900"> <Link href="/products">Your Cart</Link> </h1>
    </div>

  

    <div className="mx-auto mt-8 max-w-2xl md:mt-12">
      <div className="bg-white shadow">
        <div className="px-4 py-6 sm:px-8 sm:py-10">
          <div className="flow-root">
            
    {cart.map((i)=>(
      
            <ul key={i.id} className="-my-8">
              <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div className="shrink-0">
                  <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={i.display_image} alt="" />
                </div>

                <div  className="relative flex flex-1 flex-col justify-between">
                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                      <p className="text-base font-semibold text-gray-900">{i.merchandise_name}</p>
                      <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{i.model}</p>
                    </div>

                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${i.price}</p>

                      <div className="sm:order-1">
                        <div className="mx-auto flex h-8 items-stretch text-gray-600">
                          <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                          <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{i.quantity}</div>
                          <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>

            </ul>
            ))}
          </div>

          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">Subtotal</p>
              <p className="text-lg font-semibold text-gray-900">$399.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">Shipping</p>
              <p className="text-lg font-semibold text-gray-900">$8.00</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD</span> 408.00</p>
          </div>

          <div className="mt-6 text-center">
            <Link href="/checkout"  className="bg-black rounded p-3 text-lg text-white w-full ">
              Checkout
             
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  
</section>
 
        </>
    );
}

