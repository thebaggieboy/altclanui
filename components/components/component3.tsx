import styles from "../../styles/component3.module.css";

export default function fullImages() {
    return (
        <div className={styles.row}>
            <div className={styles.welcomeColumn}>                 
                <div className={styles.fullImages}>
                    <img src="/img/fabian-albert.jpg" alt="" className={styles.fullImg}/>
                    <div className={styles.fullImageTextCont}>
                        <div className={styles.fullImageText}>
                            <p>
                                JUST LANDED
                            </p>

                            <button className={styles.shopButton}>
                                shop now
                            </button>
                        </div>
                        
                    </div>
                </div>
             </div>

            <div className={styles.welcomeColumn}>
                <div className={styles.fullImages}>
                    <img src="/img/pexels-cottonbro-studio-4937224.jpg" alt="" className={styles.fullImg}/>
                    <div className={styles.fullImageTextCont}>
                        <div className={styles.fullImageText}>
                            <p>
                                SHOP BEST SELLERS
                            </p>

                            <button className={styles.shopButton}>
                                shop now
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};