import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination'
import '@/styles/globals.css'
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import {BrandContextProvider} from '@/context/BrandContext'
import {ProductsContextProvider} from '@/context/ProductContext'
import {CartContextProvider} from '@/context/CartContext'
import {UserContextProvider} from '@/context/UserContext'




export default function App({ Component, pageProps }: AppProps) {
  
  return(
    <>
     <UserContextProvider>
      <CartContextProvider>
          <BrandContextProvider>
            <Layout>
            <Component {...pageProps} />
            </Layout>
        </BrandContextProvider>
        </CartContextProvider>
     </UserContextProvider>
    </>
      
  ) 
}
