import React from 'react'
import styles from "./../styles/contact.module.css";

export default function contact() { 

  return (
    <div className={styles.contactSection}>
    <div>
        <div className={styles.column}>
            <img src="img/3d-business-girl-talking-online.png" alt="" className={styles.center}/>
        </div>

        <div className={styles.column}>

            <h1 className={styles.mainhead}>
                Have questions? Shoot us an email.
            </h1>

            <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras laoreet justo ac sapien interdum scelerisque. 
                Morbi lobortis, purus vitae imperdiet tincidunt, 
                orci lacus viverra nisi, sit amet maximus enim nisi eu urna. 
                Vestibulum vel vulputate nisi. Nullam varius laoreet sagittis. 
            </p>
        </div>
    </div>

    <div>
        <div className={styles.column}>
            <h1 className={styles.head}>
                How can we help?
            </h1>

            <ol>
                <li className={styles.list}>
                   1. Lorem ipsum dolor sit amet?
                </li>

                <li className={styles.list}>
                   2. Lorem ipsum dolor sit amet?
                </li>

                <li className={styles.list}>
                   3. Lorem ipsum dolor sit amet?
                </li>

                <li className={styles.list}>
                  4.  Lorem ipsum dolor sit amet?
                </li>

                <li className={styles.list}>
                  5.  Lorem ipsum dolor sit amet?
                </li>

                <li className={styles.list}>
                  6.  Lorem ipsum dolor sit amet?
                </li>

                <li className={styles.list}>
                  7.  Lorem ipsum dolor sit amet?
                </li>

                <li className={styles.list}>
                  8.  Lorem ipsum dolor sit amet?
                </li>
            </ol>
        </div>
        
        <div className={styles.column}>
            <div className={styles.form}>
                <form>
                    <fieldset>  
                        <select id="field" name="field" className={styles.select}>
                            <option value="australia"></option>
                            <option value="creative">
                                I'm a creative
                            </option>
                            <option value="customer">
                                I'm a customer
                            </option>

                            <option value="seller">
                                I want to sell on Altclan
                            </option>

                            <option value="invest">
                                I want to invest
                            </option>

                            <option value="error">
                                Shipping error
                            </option>

                            <option value="else">
                                Something else
                            </option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="name">Your Name</label>
                        <br/>
                        <input type="text" id="name" className={styles.input}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="mail">Your Email</label>
                        <input type="text" id="mail" className={styles.input}/>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="message">Your Message</label>
                        <br/>
                        <input type="text" id="name" className={styles.textarea}/>
                    </fieldset>

                    <button className={styles.submit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
    </div> 
  )
}