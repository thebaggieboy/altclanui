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
        <div className={styles.top}>
            <div className={styles.row}>
                <div className={styles.col2}>
                    <div className={styles.colsContainer}>
                        <img src="img/vivek-sharma.jpg" />
                        
                        <a href="#">
                        
                            <button>
                                SHOP BEST SELLERS
                            </button>
                        </a>
                    </div>
                </div>

                <div className={styles.col2}>
                    <div className={styles.colsContainer}>
                        <img src="img/robbie-noble.jpg" />
                        <a href="#">
                            <button>
                                SHOP NEW ARRIVALS
                            </button>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>

    )
}