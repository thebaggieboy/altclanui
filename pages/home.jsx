import Head from 'next/head'
import HeaderTab from '@/components/HeaderTab'
import BrandDiv from '@/components/BrandDiv'
import CarouselWrapper from '@/components/CarouselWrapper'
import ProductCard from '@/components/product-card/ProductCard'

const imgs = [1, 2, 3, 4]
const products = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Home() {
  return (
    <>
      <Head>
        <title>Altclan - Community of aesthetics</title>
        <meta name="description" content="Welcome to our community of aesthetics, and explore between brands and awesome collections" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/alteclan_logo.jpg" />
      </Head>

      <HeaderTab />
      <BrandDiv />
      
      <CarouselWrapper pagination="true">
        {
          imgs.map( ( img ) => {
            return <div key={ img } className='h-[20rem] md:h-[35rem] bg-gray-500 grid place-items-center'>
              <h1 className='text-3xl text-white uppercase'>Placeholder { img }</h1>
            </div>
          } )
        }
      </CarouselWrapper>

      <section className='px-4 py-8 sm:px-8 trending'>
        <h1 className='mb-16 text-3xl text-center capitalize'>Trending Now</h1>

        <CarouselWrapper slidesPerView={4} controls breakpoints>
          {
            products.map( ( id ) => {
              return <ProductCard key={ id } id={ id } />
            } )
          }
        </CarouselWrapper>

      </section>

    </>
  )
}
