import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function BrandOfTheWeek() {
    return (
           <div>
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
                        <Link href='/brands'>
                        view all brands
                        </Link>
                    </button>
                </div>

            </div>
              
    )
}