import Image from "next/image";
import styles from "../styles/Home.module.css";

const images = [
  {
    id: 1,
    name: "women",
    href: "#",
    imageSrc: "/img/dami-adebayo-female.jpg",
  },

  {
    id: 2,
    name: "men",
    href: "#",
    imageSrc: "/img/mike-von.jpg",
  },

  {
    id: 3,
    name: "brands",
    href: "#",
    imageSrc: "/img/dami-adebayo-brands.jpg",
  }
];

export default function ImagesDiv() {
  return (
    <div className='shop-by px-8 py-16'>
      <h2 className="text-3xl text-center mb-4">SHOP BY</h2> <br />
      <div className='shop-by__items'>
          {images.map((image) => (
            <a key={image.id} href={image.href}>
              <img alt="" src={image.imageSrc} className='aspect-1 object-cover'/>
              <br />
              <button className={styles.imageButton}>Shop {image.name}</button>
            </a>
          ))}
      </div>
    </div>
  );
}
