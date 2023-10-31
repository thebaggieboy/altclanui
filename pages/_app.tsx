import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination'
import '../styles/globals.css'
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout"

import { CartContextProvider } from '../context/CartContext'
import Providers from '../features/Providers';


function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <CartContextProvider>
        <Providers>
          <Layout>
            <Component { ...pageProps } />
          </Layout>
        </Providers>

      </CartContextProvider>



    </>

  )
}



export default App

