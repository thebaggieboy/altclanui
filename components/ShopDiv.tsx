import styles from '../styles/Home.module.css'

const images = [
    {
        id: 1,
        name: 'women',
        href: '#',
        imageSrc: '/img/bag.jpg',
    },

    {
        id: 2,
        name: 'men',
        href: '#',
        imageSrc: '/img/shades.jpg',
    },
]

export default function ShopDiv() {
    return (
        <div>
            <div className={styles.row}>
                <div className={styles.col2}>
                    <div className={styles.colsContainer}>
                        <img src="img/shades.jpg" />
                        <a href="#">
                            <button>
                                SHOP NOW
                            </button>
                        </a>
                    </div>
                </div>

                <div className={styles.col2}>
                    <div className={styles.colsContainer}>
                        <img src="img/cap.jpg" />
                        <a href="#">
                            <button>
                                SHOP NOW
                            </button>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>

    )
}