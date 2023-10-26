import React, { useState, useEffect, Component } from 'react';
import Category from "../../components/Category"
import styles from "../../styles/category.module.css";

const products = [


  {
    id: 1,
    name: "Tees",
    href: "#",
    price: "$48",
    imageSrc: "/img/tees.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Accessories",
    href: "#",
    price: "$35",
    imageSrc: "/img/rings.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Jeans",
    href: "#",
    price: "$89",
    imageSrc: "/img/jeans.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Sweaters",
    href: "#",
    price: "$35",
    imageSrc: "/img/sweaters.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Glasses",
    href: "#",
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
    imageSrc: "/img/jackets.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Bags",
    href: "#",
    price: "$35",
    imageSrc: "/img/bag.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    name: "Caps & Hats",
    href: "#",
    price: "$35",
    imageSrc: "/img/cap.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];


export default function Collection() {
  return (
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
  )
}
