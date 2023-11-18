
import Footer from './Footer'
import HeaderNav from './headers/HeaderNav'


import { useEffect, useRef } from 'react'
import { fetchUser } from '../lib/fetchUser'
import { selectUser, setUser } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { setBrandUser } from '../features/brands/brandUserSlice'
import { useQuery } from '@tanstack/react-query'

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

  const user = useSelector(selectUser)


  const { isLoading, error, data } = useQuery({ queryKey: ["user", user?.pk], queryFn: fetchUser })
  
  if (data) {
    dispatch(setUser(data))
  }

  if (error) {
    console.log(error)
  }


  return (
    <>
      <HeaderNav />
      {children}
      <Footer />
    </>
  )
}
