import React, { useState, useEffect } from 'react'
import Image from "next/image"
import { useDispatch, useSelector } from 'react-redux'

import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import Tabs from "./Tabs/Tab"
import { selectUser } from '../../features/user/userSlice'

import Link from "next/link"


export default function Orders() {

  const user = useSelector(selectUser);
  const router = useRouter()
  const dispatch = useDispatch()
  const searchParams = useSearchParams();
  const updateMessage = searchParams.get('update')
  const [orders, setOrders] = useState([])
  const [orderError, setOrderError] = useState('No current Order')
  
  let orderResults = []

  const getOrder = async()=>{
      console.log("Getting orders from api")
      try {
          const orderUrl = await fetch("https://altclan-api-v1.onrender.com/api/orders/")
          const data = await orderUrl.json()
          const orderResult = data?.filter((product) => product.user_email == user?.email );
          
          setOrders(orderResult)
          console.log("Order State: ", orderResult)
      } catch (error) {
          console.error("Error fetching orders:", error)
      }
  }

  useEffect(() => {
      if (user) {
          getOrder()
      }
  }, [user])
  
  const [formData, setFormData] = useState({
    email: user ? user[0]?.email : '',
    first_name: user ? user[0]?.first_name : '',
    last_name: user ? user[0]?.last_name : '',  
    mobile_number: user ? user[0]?.mobile_number : '',
    display_picture: user ? user[0]?.display_picture : '',
  })

  useEffect(() => {
      if (user) {
          setFormData({
              email: user[0]?.email,
              first_name: user[0]?.first_name,
              last_name: user[0]?.last_name,  
              mobile_number: user[0]?.mobile_number,
              display_picture: user[0]?.display_picture,
          })
      }
  }, [user])

  const inputChangeHandler = (e) => {
      const { name, value } = e.target
      setFormData((prevValue) => {
          return {
              ...prevValue,
              [name]: value
          }
      })

  }
  const brandProfileSuccess = (
      <div className="flex items-center text-center p-4 mb-4 text-sm text-green-800 border border-0 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div className='font-bold text-center'>
              You have updated your user profile successfully
          </div>
      </div>
  )

  async function updateUserProfile() {
      try {
          const res = await fetch(`https://altclan-api-v1.onrender.com/api/users/${user[0]?.id}/`, {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  email: formData?.email,
                  first_name: formData.first_name,
                  last_name: formData.last_name,
                  mobile_number: formData.mobile_number,
                  display_picture: formData.display_picture,
              }),
          })

          const data = await res.json()

          if (res.status >= 200 && res.status <= 209) {
              console.log("User Profile UPDATED")
              router.push(`/profile/${user[0]?.id}?update=success`)
          } else {
              throw new Error(data)
          }
      } catch (error) {
          console.error("Error updating user profile:", error)
      }
  }

  async function onSubmit() {
      console.log("Submit Clicked")
  }

  console.log("formData: ", formData)

  return (
      <> 
          {updateMessage == 'success' ? brandProfileSuccess : ""}

          <Tabs />
      </>
  )
}
