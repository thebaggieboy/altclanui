import React from 'react'
import styles from "../styles/Home.module.css";
import CountUp from "../src/aboutcounter/brand.jsx" 
import Head from "next/head"
export default function about() {
  return (
    <>
      <Head>
       <title>Altclan - About us</title>
            <meta charset="UTF-8" />
            <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
            <meta
              name="description"
              content="About us | Learn more"
            />
              <meta name="keywords"
                    content="altclan, about us altclan, altclan about, about altclan, altclan about us" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/alteclan_logo.jpg" />
       </Head> 
    <div>
  
      <div className={styles.padding}>
        <h1>
          About us
        </h1>

        <p style={{fontSize:12}}>
        Our startup wants to help people who love unique cultures, creative arts, and cool styles connect with each other. Sometimes, those who are into these things feel a bit left out in regular society. We want to create a place where they can feel part of a community and connect with like-minded people who share their interests.
        </p> <br/>
      </div>

      <div className={styles.section}>
        <h1>
          Fast facts
        </h1>

        <br/>

        <div className={styles.row}>

          <div className={styles.col33}>
            <div className={styles.aboutCards}>
              <h3>
                <CountUp end={50} start={0}/>
              </h3>

              <p>
                brands nationwide
              </p>
              <p className={styles.bottom}>
                as of March 20, 2023
              </p>
            </div>
          </div>

          <div className={styles.col33}>
            <div className={styles.aboutCards}>
              <h3>
                <CountUp end={2000} start={0}/>
              </h3>

              <p>
                users nationwide
              </p>
              <p className={styles.bottom}>
                as of March 20, 2023
              </p>
            </div>
          </div>

          <div className={styles.col33}>
            <div className={styles.aboutCards}>
              <h3>
                <CountUp end={25} start={0}/>
              </h3>
              <p>
                states across the country
              </p>
              <p className={styles.bottom}>
                as of March 20, 2023
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.padding}>
        <h1>
          Why use?
        </h1>

        <p style={{fontSize:12}}>
        There are several reasons why consumers and audiences might want to use a platform that connects people from different cultures together.
        </p>

        <div className={styles.contentContainer}>
          <div className={styles.colContainer}>
            <div className={styles.columnTwo}>
                <img src="/img/pexels-leticia-ribeiro-2112651.jpg"/>
            </div>
            <div className={styles.columnOne}>
              <p className={styles.xlFont}>
                First
              </p>
              <p style={{fontSize:12}}>
             Altclan is a source of inspiration for people looking to start their own brands, projects or movements. Your platform can provide a space for individuals to learn from the experiences of others, to network and to collaborate on projects. This can lead to the emergence of new subcultures or movements and the creation of new opportunities for people.
              
              
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.colContainer}>
            <div className={styles.columnOne}>
              <p  className={styles.xlFont}>
                Second
              </p>
              <p style={{fontSize:12}}>
     Our platform offers a chance for individuals to engage and gain insights from various unconventional, stylish, distinctive, and diverse communities.
              </p>
            </div>
            <div className={styles.columnTwo}>
                <img src="/img/vivek-sharma.jpg"/>
            </div>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.colContainer}>
            <div className={styles.columnTwo}>
                <img src="/img/natalie-hua.jpg"/>
            </div>
            <div className={styles.columnOne}>
              <p  className={styles.xlFont}>
                Third
              </p>
              <p style={{fontSize:12}}>
                It can also be a platform for individuals to express their views and ideas, which can be heard and seen by a wider audience.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.colContainer}>
            <div className={styles.columnOne}>
              <p className={styles.xlFont}>
                Fourth
              </p>
              <p style={{fontSize:12}}> 
              It provides a sense of belonging and community for individuals who may feel isolated in mainstream society. 
              </p>
            </div>
            <div className={styles.columnTwo}>
                <img src="/img/dami-adebayo-brands.jpg"/>
            </div>
          </div>
        </div>

        <p style={{fontSize:12}}>
          In short, our platform is a cool place where people feel like they belong, discover unique subcultures, and embrace anti-mainstream vibes. 
                It also boosts the voices of those who go against the norm and provides inspiration and opportunities. 
                It's a valuable resource for anyone into unconventional, anti-mainstream, and new cultures.
        </p>

      </div> 

      <div className={styles.section}>
        <p className={styles.p}>
          More To Explore
        </p>

        <br/>

        <div className={styles.row}>

          <div className={styles.col33}>
            <div className={styles.team}>
              <img src="/img/pexels-arianna-jadé-2896823.jpg"/>
              <p>
                BRANDS
              </p>
              
            </div>
          </div>

          <div className={styles.col33}>
            <div className={styles.team}>
              <img src="/img/pexels-athena-2081199.jpg"/>
              <p>
                SHOP
              </p>

            </div>
          </div>

          <div className={styles.col33}>
            <div className={styles.team}>
              <img src="/img/pexels-cottonbro-studio-4937224.jpg"/>
              <p>
                COLLECTIONS
              </p>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}
