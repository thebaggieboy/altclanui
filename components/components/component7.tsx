import styles from "../../styles/component7.module.css";

export default function form() {
    return (
        <div className={styles.row}>
            <div className={styles.formCol}>
                <h1 className={styles.discount}>
                    GET 10% OFF YOUR FIRST ORDER
                </h1>

                <p className={styles.signText}>
                    Sign up for promotions, tailored new arrivals, stock updates and more – straight to your inbox
                </p>
            </div>

            <div className={styles.formCol}>
                <form action="" className="mt-1" p-1 mx-auto>
                    <input type="email" className={styles.email}  placeholder="Email Address"/>

                    <button type="submit" className={styles.submit}>
                        Sign up
                    </button>

                </form> <br/>

                <p className={styles.signUp}>
                    By signing up, you consent to receiving marketing by email and/or SMS and acknowledge you have read our Privacy Policy. 
                    Unsubscribe anytime at the bottom of our emails or by replying STOP to any of our SMS.
                </p>
                
            </div>

        </div>
    );
};