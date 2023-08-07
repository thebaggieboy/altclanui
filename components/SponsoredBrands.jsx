import React from 'react';
const imgs = [1, 2, 3, 4];
const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SponsoredBrands = () => {

    return (
        <div>
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
        </div>
    );
}

export default SponsoredBrands;
