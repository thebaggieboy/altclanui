import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination'
import '../styles/globals.css'
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout"

import { CartContextProvider } from '../context/CartContext'
import { wrapper } from '../features/store';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { setUser } from "../features/user/userSlice";
import {setBrandUser} from "../features/brands/brandUserSlice"
import { validateUser } from "../lib/validateUser";
import {validateBrandUser} from "../lib/validateBrandUser";	
import { useRouter } from 'next/router';


function App({ Component, pageProps }: AppProps) {

  const dispatch = useDispatch()
  const router = useRouter();

  const ref = useRef(null);

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
      <CartContextProvider>
        <Layout>
          <Component { ...pageProps } />
        </Layout>

      </CartContextProvider>



    </>

  )
}



export default wrapper.withRedux(App)

