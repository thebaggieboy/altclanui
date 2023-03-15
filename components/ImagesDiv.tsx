import styles from '../styles/Home.module.css'

const images = [
    {
        id: 1,
        name: 'women',
        href: '#',
        imageSrc: '/img/dami-adebayo-female.jpg',
    },

    {
        id: 2,
        name: 'men',
        href: '#',
        imageSrc: '/img/dami-adebayo-1.jpg',
    },

    {
        id: 3,
        name: 'brands',
        href: '#',
        imageSrc: '/img/dami-adebayo-brands.jpg',
    },

    {
        id: 4,
        name: 'all',
        href: '#',
        imageSrc: '/img/no-revisions.jpg',
    },
  ]

export default function ImagesDiv() {
    return (
        <div className={styles.brandContent}>
            <div className={styles.scrollImages}>

                <div className={styles.imageCard}>
                    {images.map((image) => (
                        <a key={image.id} href={image.href}>
                            <img
                                src={image.imageSrc}
                            />
                             <br/>
                            <button className={styles.imageButton}>Shop {image.name}</button>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}