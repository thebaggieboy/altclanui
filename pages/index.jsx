import Head from "next/head";
import HeaderTab from "@/components/headers/HeaderTab";
import BrandDiv from "@/components/brands/BrandDiv";
import CarouselWrapper from "@/components/CarouselWrapper";
import ProductCard from "@/components/product-card/ProductCard";
import BrandOfTheWeek from "@/components/brands/BrandOfTheWeek";
import ImagesDiv from "@/components/ImagesDiv";
import ShopDiv from "@/components/ShopDiv";
import Category from "@/components/Category";
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
      <CarouselWrapper
        autoplay={{ delay: 2500 }}
        disableOnInteraction={false}
        pagination={true}
        className="hero-carousel"
      >
        <Image src="/img/bag.jpg" fill alt="hero-umg" />
        <Image src="/img/no-revisions.jpg" fill alt="hero-umg" />
        <Image src="/img/pexels-pixabay-157888.jpg" fill alt="hero-umg" />
      </CarouselWrapper>
      <BrandDiv />
      <ImagesDiv />
      <ShopDiv />
      <BrandOfTheWeek />
      <Category />
      <section className="px-4 py-12 sm:px-8 trending">
        <h1 className="mb-16 text-3xl text-center capitalize">Trending Now</h1>

        <CarouselWrapper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={carouselBreakpoints}
          controls
        >
          {products.map((id) => {
            return <ProductCard key={id} id={id} />;
          })}
        </CarouselWrapper>
      </section>
    </>
  );
}
