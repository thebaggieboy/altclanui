import styles from "../styles/Home.module.css";

export default function HeadColumn() {
  return (
      <div>
        <div className={styles.headSection}>
            <div className={styles.columnOne}>
                <div className={styles.headContainer}>
                    <div className={styles.headText}>
                        <h1>
                            Welcome to our alternative fashion startup!
                        </h1>

                        <p>
                            Celebrate non-conformity,
                            creativity, and self-expression through our curated collection of
                            sustainable and ethical fashion. From vintage to goth, punk to
                            bohemian, embrace your unique style with us.
                        </p>
                        
                        <a className="bg-black text-white p-g-2                                                                                                                                                                                                                                                                                 " href="/brands/signup">
                            <button className={styles.headButton}>
                                Signup as a brand
                            </button>
                        </a>
                        
                    </div>
                </div>
            </div>

            <div className={styles.columnOne}>
                <h1>
                    <img alt="" src="img/mukuko-studio-mU88MlEFcoU-unsplash.jpg " className={styles.headerimage}/>
                </h1>
            </div>
        </div>
    </div>
  );
}