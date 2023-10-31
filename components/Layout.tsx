
import Footer from './Footer'
import HeaderNav from './headers/HeaderNav'


import { useEffect, useRef } from 'react'
import { validateUser } from '../lib/validateUser'
import { setUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { validateBrandUser } from '../lib/validateBrandUser'
import { setBrandUser } from '../features/brands/brandUserSlice'

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
    async function getUserData() {
      try {
        const userData = await validateUser();
        dispatch(setUser(userData));
        if (ref.current === "/profile") {
          router.push("/profile")
        }

      } catch (error) {
        console.log(error.message);
      }
    }
    getUserData();
  }, []);

  useEffect(() => {
    async function getBrandUserData() {
      try {
        const brandUserData = await validateBrandUser();
        dispatch(setBrandUser(brandUserData));
        if (ref.current === "/brands/register/") {
          router.push("/brands/register/")
        }

      } catch (error) {
        console.log(error.message);
      }
    }
    getBrandUserData();
  }, []);

  return (
    <>
      <HeaderNav />
      { children }
      <Footer />

    </>




  )
}
