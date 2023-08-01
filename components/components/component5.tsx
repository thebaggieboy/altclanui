import styles from "../../styles/component5.module.css";

const products = [
    {
      id: 1,
      name: "Pandora",
      href: "#",
      imageSrc: "/img/lauren-grogan-e46hyCWI73c-unsplash.jpg",
      details:
        "Jewelleries for everyone.",
    },
    {
      id: 2,
      name: "Jansport",
      href: "#",
      imageSrc: "/img/pexels-luis-quintero-3731256.jpg",
      details:
        "Quality collection of backpacks, bags, totes, and accessories.",
    },
    {
      id: 3,
      name: "Defacto",
      href: "#",
      imageSrc: "/img/natalie-hua.jpg",
      details:
        "Day to day, basic wears.",
    },
];

export default function sponsored() {
    return (
        <>
            <h1 className={styles.header}>
                Sponsored Brands
            </h1>

            <div className={styles.row}>
                {products.map((product) => (
                    <div key={product.id}>
                        <a key={product.id} href={product.href}>
                            <div className={styles.imageCol}>
                                <div className={styles.card}>
                                    <img src={product.imageSrc} alt="" className={styles.productImage}/>

                                    <h1 className={styles.name}>
                                        {product.name}
                                    </h1>


                                    <p className={styles.details}>
                                        {product.details}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};