import React, { useState, useEffect, Component } from 'react';
import Category from "../../components/Category"
import styles from "../../styles/category.module.css";
import Head from "next/head"
const products = [


  {
    id: 1,
    name: "Tees",
    href: "/products?q=Tees",
    price: "$48",
    imageSrc: "/img/tees.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Accessories",
    href: "/products?q=Accessories",
    price: "$35",
    imageSrc: "/img/rings.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Jeans",
    href: "/products?q=Jeans",
    price: "$89",
    imageSrc: "/img/jeans.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Sweaters",
    href: "/products?q=Sweaters",
    price: "$35",
    imageSrc: "/img/sweaters.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Glasses",
    href: "/products?q=Shades",
    price: "$35",
    imageSrc: "/img/shades.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Jackets",
    href: "#",
    price: "$35",
    imageSrc: "/img/jackets?q=Jackets.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Bags",
    href: "/products?q=Bags",
    price: "$35",
    imageSrc: "/img/bag.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    name: "Caps",
    href: "/products?q=Caps",
    price: "$35",
    imageSrc: "/img/cap.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

];


export default function Collection() {
  return (
    <>
      <Head>
       <title>Search for merch</title>
            <meta charset="UTF-8" />
            <meta
              name="description"
              content="Collections -  Select your merchandise category."
            />
              <meta name="keywords"
                    content="altclan, altclan login, login, fashion, community, aesthetics, enigmas, arts, merchandises,  clothing, rings, accessories" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/alteclan_logo.jpg" />
       </Head> 
    <div className={styles.content}>
        <div className="grid sm:grid-cols-3 gap-12 max-w-[100%] mx-auto">
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.container}>
              <h4>
                <b>
                  {product.name}
                </b>
              </h4> 
              <a key={product.id} href={product.href}>
                View all
              </a>
            </div>

            <img
              src={product.imageSrc}
              alt={product.imageAlt}
            />
          </div>
        ))}
        </div>
    </div>
    </>
  )
}
