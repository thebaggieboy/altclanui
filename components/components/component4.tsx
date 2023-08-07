import styles from "../../styles/component4.module.css";
import heart from "../../public/assets/heart.svg"

const products = [
    {
      id: 1,
      banner: "Trending",
      name: "Lorvae",
      href: "#",
      price: "₦15,000",
      imageSrc: "/img/shades.jpg",
      details:
        "Embrace the nostalgia of summer with our Retro Cat glasses.",
    },
    {
      id: 2,
      banner: "Trending",
      name: "Baggieboy",
      href: "#",
      price: "₦30,000",
      imageSrc: "/img/jackets.jpg",
      details:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 3,
      banner: "New Season",
      name: "Bags.ng",
      href: "#",
      price: "₦150,000",
      imageSrc: "/img/bag.jpg",
      details:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 4,
      banner: "Limited",
      name: "Miniso",
      href: "#",
      price: "₦8,000",
      imageSrc: "/img/cap.jpg",
      details:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
];

export default function newIn() {
    return (
        <>
            <div className={styles.header}>
            <div className="p-3">
            <p className="text-center text-lg bolder">
                    New Merch: handpicked from the social media’s best brands and boutiques
                </p>
            </div>

                <div className={styles.textRight}>
                    <p>
                        Shop Now
                    </p>
                </div>
            </div>

            <div className={styles.row}>
                {products.map((product) => (
                    <div key={product.id}>
                        <a key={product.id} href={product.href}>
                            <div className={styles.shopColumn}>
                                <div className={styles.card}>
                                    <div className={styles.container}>
                                        <div className={styles.topleft}>
                                            <img alt="" src="{heart}" />
                                        </div>
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className={styles.productImage}
                                         />
                                    </div>

                                    <p className={styles.banner}>
                                        {product.banner}
                                    </p>

                                    <h1 className={styles.name}>
                                        {product.name}
                                    </h1>

                                    <p className={styles.price}>
                                        {product.price}
                                    </p>

                                    {/* <p className={styles.details}>
                                        {product.details}
                                    </p> */}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            
        </>
    );
};