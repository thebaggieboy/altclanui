import { Analytics } from '@vercel/analytics/react';
import Footer from './Footer'
import HeaderNav from './headers/HeaderNav'


import { useEffect, useRef } from 'react'
import { fetchUser } from '../lib/fetchUser'
import { selectUser, setUser } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'


export default function Layout({
  children,

}: {
  children: React.ReactNode
}) {
  const dispatch = useDispatch()
  const router = useRouter()

  const ref = useRef("");

  useEffect(() => {
    ref.current = router.asPath;
  }, [router.asPath]);

  useEffect(() => {
    async function getUser() {
      try {
        const user = await fetchUser()
        console.log("User: ", user)
        //dispatch(setUser(user))
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [])

  return (
    <>
      <HeaderNav />
      {children}
      <Analytics />
      <Footer />
    </>
  )
}
