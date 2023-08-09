import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination'

import '@/styles/globals.css'
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import {ProductsContextProvider} from '@/context/ProductContext'

export default function App({ Component, pageProps }: AppProps) {
  
  return(
    
      <ProductsContextProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      
      </ProductsContextProvider>
  ) 
}
