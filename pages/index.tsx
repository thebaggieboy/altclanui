import Head from 'next/head'
import Image from 'next/image'
import HeaderTab from '@/components/HeaderTab'
import BrandDiv from '@/components/BrandDiv'
import Category from '@/components/Category'

export default function Home() {
  return (
    <>
      <Head>
        <title>Altclan - Community of aesthetics</title>
        <meta name="description" content="Welcome to our community of aesthetics, and explore between brands and awesome collections" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/alteclan_logo.jpg" />
      </Head>

      <HeaderTab/>
      <BrandDiv/>
      <Category/>


     
    </>
  )
}
