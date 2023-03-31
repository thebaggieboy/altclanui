import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function BrandOfTheWeek() {
  return (
    <>
      <div className="brand-of-week py-16">
        <h1 className="text-3xl text-center mb-16">BRANDS OF THE WEEK</h1>
        <div className="grid sm:grid-cols-2 gap-8 max-w-[90%] mx-auto">
          <div className={styles.container}>
            <img src="img/jeans.jpg" className="aspect-1 object-cover" />
            <button className={styles.button}>NIKE</button>
          </div>

          <div className={styles.container}>
            <img src="img/jeans.jpg" className="aspect-1 object-cover" />
            <button className={styles.button}>MISKAY</button>
          </div>
        </div>
      </div>

      <div className={styles.centerButton}>
        <button>
          <Link href="/brands">view all brands</Link>
        </button>
      </div> <br/>
    </>
  );
}
