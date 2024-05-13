import React, { Component, useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeaderTab from "../components/headers/HeaderTab";
import BrandDiv from "../components/brands/BrandDiv";
import CarouselWrapper from "../components/CarouselWrapper";
import ProductCard from "../components/product-card/ProductCard";
import BrandOfTheWeek from "../components/brands/BrandOfTheWeek";
import ImagesDiv from "../components/ImagesDiv";
import ShopDiv from "../components/ShopDiv";
import Category from "../components/Category";
import HeadColumn from "../components/HeadColumn";
import MainColumn from "../components/components/component2";
import FullImages from "../components/components/component3";
import NewIn from "../components/components/component4";
import Sponsored from "../components/components/component5";
import Cards from "../components/components/component6";
import Form from "../components/components/component7";
import MoreToExplore from "../components/MoreToExplore";
import Image from "next/image";
import Preloader from "../components/preloader"
import SponsoredBrands from '../components/SponsoredBrands';
import useBrands from '../hooks/useMerch';
import useData from '../hooks/useData';
import BrandCard from '../components/brand-card';
import TrendingMerch from "../components/TrendingMerch";
import TrendingBrands from "../components/TrendingBrands";
import FeaturedProducts from "../components/FeaturedProducts";
import Link from "next/link";
import Token from "../components/Token";
import Altcoin from "../components/Altcoin";
import Aesthetics from "../components/Aesthetics";
import Aesthetics2 from "../components/Aesthetics2";

const brands = [1, 2, 3, 4]
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800, []);

  }, []);
  return (
    <>
      {loading ? <Preloader /> :
        <>
          <Head>
            <title>Altclan - Community of alternative clothing.</title>
            <meta charset="UTF-8" />
            <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
            <meta
              name="description"
              content="Explore limited edition items, exclusive alternative style & clothing brands "
            />
              <meta name="keywords"
                    content="alternative clothing, alternative fashion,Goth & Alternative Clothing,   fashion community, aesthetics, altclan fashion, altclan community, community of aesthetics, alternative fashion , alte " />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="google-site-verification" content="5EKq2n_Ml30RyX_JkTTWG8XB2as2tWWkEEfLjPn9go4" />
            <link rel="icon" href="/alteclan_logo.jpg" />
            <meta name="author" content="Altclan"></meta>
          </Head>
          <HeaderTab />

          <div style={{fontFamily:'Poppins, sans-serif'}} className={styles.mainComponents}>
            <div className="grid text-white place-items-center">
              <CarouselWrapper
                autoplay={{ delay: 2500 }}
                disableOnInteraction={false}
                pagination={true}
                className="hero-carousel col-start-1 col-end-2 row-start-1 row-end-2"
              >
                <Image src="/img/moh-mckenzie-compressed.jpg" fill alt="hero-umg" />
                <Image src="/img/black-guy-1-compressed.jpg" fill alt="hero-umg" />
                <Image src="/img/natalie-hua-compressed.jpg" fill alt="hero-umg" />
                <Image src="/img/b-shah-compressed.jpg" fill alt="hero-umg" />
              </CarouselWrapper>
              <div className="w-full h-full p-3 bg-black/40 flex flex-col items-center justify-center gap-y-8  col-start-1 col-end-2 row-start-1 row-end-2 z-[2]">
                
                <h1 className=" md:text-2xl ">Discover top styles of the season, exclusive brands and amazing aesthetics now at better prices.</h1>
                <div className="flex items-center gap-x-8">
                  <Link href="/products?q=women">
                    <button className="py-2 px-8 uppercase bg-white text-black text-sm md:text-base">shop women</button>
                  </Link>
                  <Link href="/products?q=men">
                    <button className="py-2 px-8 uppercase bg-white text-black text-sm md:text-base">shop men</button>
                  </Link>
                </div>
              </div>
            </div>

            <MainColumn />
            <FullImages />
  
      
            <Aesthetics2/>
            <Category />
            <ShopDiv />
            <Altcoin/>
         
         
            

            <br />
          
          
            <Cards />
            <Token/>
            <Form />
          </div>
        
        </>
      }
    </>
  );
}
