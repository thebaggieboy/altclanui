/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/component2.module.css";
import Link from 'next/link'
export default function mainColumn() {
    return (
        <div  className={styles.cover}>
            <div className={styles.row}>
                <div className={styles.welcomeColumn}>                 
                    <div className={styles.headContainer}>
                        <div className={styles.headingText}>
                            <span className={styles.welcomeHeader}>
                                Welcome to our alternative fashion startup!
                            </span>

                            <p className={styles.welcomeText}>
                                Celebrate non-conformity, creativity, and self-expression through our curated collection of sustainable and ethical fashion. 
                                From vintage to goth, punk to bohemian, embrace your unique style with us.
                            </p>
                            <br />
                            <div className={styles.signUpBrandCont}>
                                <button className={styles.brandButton}>
                                   <Link href="/signup">Join the community</Link> 
                                </button>
                            </div> <br /> 
                            
                        </div>
                    </div>
                </div>

                <div className={styles.welcomeColumn}>
                    <img src="/img/headersweat.jpg" alt="" className={styles.headImage}/>
                </div>
            </div>
        </div>
    );
};