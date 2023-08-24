import Head from "next/head";
import styles from "../styles/Home.module.css"
import HeaderTab from "@/components/headers/HeaderTab";
import BrandDiv from "@/components/brands/BrandDiv";
import CarouselWrapper from "@/components/CarouselWrapper";
import ProductCard from "@/components/product-card/ProductCard";
import BrandOfTheWeek from "@/components/brands/BrandOfTheWeek";
import ImagesDiv from "@/components/ImagesDiv";
import ShopDiv from "@/components/ShopDiv";
import Category from "@/components/Category";
import HeadColumn from "@/components/HeadColumn";
import MainColumn from "@/components/components/component2";
import FullImages from "@/components/components/component3";
import NewIn from "@/components/components/component4";
import Sponsored from "@/components/components/component5";
import Cards from "@/components/components/component6";
import Form from "@/components/components/component7";
import MoreToExplore from "@/components/MoreToExplore"
import Image from "next/image";

const imgs = [1, 2, 3, 4];
const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const carouselBreakpoints = {
  640: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Altclan - Community of aesthetics</title>
        <meta
          name="description"
          content="Welcome to our community of aesthetics, and explore between brands and awesome collections"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/alteclan_logo.jpg" />
      </Head>
      <HeaderTab />

      <div className={styles.mainComponents}>
        <CarouselWrapper
          autoplay={{ delay: 2500 }}
          disableOnInteraction={false}
          pagination={true}
          className="hero-carousel"
        >
            <Image src="/img/moh-mckenzie.jpg" fill alt="hero-umg" />
          <Image src="/img/black-guy-1.jpg" fill alt="hero-umg" />
          <Image src="/img/natalie-hua.jpg" fill alt="hero-umg" />
          <Image src="/img/b-shah.jpg" fill alt="hero-umg" />
        </CarouselWrapper>
        
        <MainColumn />
        <FullImages />
        <NewIn />
        {/* <Sponsored />
        <MoreToExplore/> */}
        {/* <Category/>  */}
        
       
        

         <div className="m-2">
         <h1 className="text-3xl text-center capitalize">Trending Merchandise</h1>
         <br/>
         <CarouselWrapper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={carouselBreakpoints}
            controls
          >
            {products.map((id) => {
              return <ProductCard key={id} id={id} />
            })}
          </CarouselWrapper>
      
         </div>
        
        <Cards /> 
        <Form />
        </div>

    </>
  )
}
