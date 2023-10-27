import styles from "../../styles/brand.module.css"

const BrandHeader = () => {
    return(
        <>
            <div className={styles.brandnav}>
                <div className={styles.searchContainer}>
                    <form action="/">
                        <input type="text" placeholder="Search brands.." name="search" />
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 19 19" fill="none">
                                <path d="M13.7377 13.7534L19 19M15.9667 8.38333C15.9667 12.5715 12.5715 15.9667 8.38333 15.9667C4.19517 15.9667 0.799999 12.5715 0.799999 8.38333C0.799999 4.19517 4.19517 0.799999 8.38333 0.799999C12.5715 0.799999 15.9667 4.19517 15.9667 8.38333Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </form>
                </div>
                <div className={styles.brandfilter}>
                    <button className={styles.dropbtn}>
                        Filter 
                    </button>
                    <div className={styles.brandfilterContent}>
                    <a href="#">Best sellers</a>
                    <a href="#">Upcoming</a>
                    <a href="#">Top rated</a>
                    <a href="#">Top followed</a>
                    <a href="#">A-Z</a>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default BrandHeader