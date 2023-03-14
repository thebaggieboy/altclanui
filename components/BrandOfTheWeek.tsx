import styles from '../styles/Home.module.css'

export default function BrandOfTheWeek() {
    return (
           <div className={styles.content}>
                <div className={styles.brandContent}>
                    <div className={styles.row}>
                        <h1 className={styles.h1}>
                            BRANDS OF THE WEEK
                        </h1>
                        
                        <div className={styles.col}>
                            <div className={styles.container}>
                                <img src="img/jeans.jpg" />
                                <button className={styles.button}>
                                    NIKE
                                </button>
                            </div>
                        </div>

                        <div className={styles.col}>
                            <div className={styles.container}>
                                <img src="img/jeans.jpg" />
                                <button className={styles.button}>
                                    MISKAY
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.centerButton}>
                    <button>
                        view all brands
                    </button>
                </div>

            </div>
              
    )
}