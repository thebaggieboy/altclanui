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
import { OurGrowth } from "../components/OurGrowth";
 

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
            <section class="overflow-visible my-0  p-10">
          <div className={styles.discountCard}>
  <div class="text-black items-center text-center flex flex-col">
    <h2 class="font-bold text-2xl lg:text-4xl">Get Up to 70% off</h2>
    
    <a class="mt-8 rounded-md bg-yellow-100 px-5 py-2.5 text-base font-bold leading-7 text-black hover:bg-gray-200 transition focus:outline-none focus:ring focus:border-blue-300"
      href="#">Get Started Now</a>
  </div>
</div>
       
          </section>
            <ShopDiv /> <br />
         
            <Altcoin/>
          <OurGrowth/>
          <section class="overflow-visible my-0  p-10">
          <div className={styles.aestheticAdventure}>
  <div class="text-white items-center text-center flex flex-col">
    <h2 class="font-extralight text-2xl lg:text-4xl">Embark on an Aesthetic Adventure</h2>
    <p class="mx-auto mt-6 max-w-xl text-xs md:text-xl  text-yellow-100" >
      Take a thrilling journey through our product's features. Book an adventurous demo and discover endless
      possibilities.
    </p>
    <a class="mt-8 rounded-md bg-white px-5 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-200 transition focus:outline-none focus:ring focus:border-blue-300"
      href="#">Claim Your 15% off Adventure! Start Now</a>
  </div>
</div>
       
          </section>
     <TrendingMerch/>
     <TrendingBrands/>

            <br />
          
          
            <Cards /> 
            <Token/>
            



            <Form />
          </div>
        
<footer className="bg-black text-white dark:bg-gray-900 p-10">
    <div className="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                    <Link href="/about" className=" hover:underline">About</Link>
                </li>

                <li className="mb-4">
                    <Link href="/brands" className="hover:underline">Brand Center</Link>
                </li>

            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Snapchat</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Twitter</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Instagram</Link>
                </li>
                <li className="mb-4">
                    <Link href="/contact" className="hover:underline">Contact Us</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                </li>
        
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                </li>
            </ul>
        </div>
      
    </div>
    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="">Altclan</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
     
            <Link href="https://www.instagram.com/altclanofficial_/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                <span className="sr-only">Instagram page</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span className="sr-only">Twitter page</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                <span className="sr-only">GitHub account</span>
            </Link>
  
        </div>
    </div>
</footer>

        </>
      }
    </>
  );
}
