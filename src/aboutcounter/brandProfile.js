import { Tab } from '@headlessui/react';
import React from 'react'; 
import styles from "../../styles/brand.module.css";

const MyTabs = () => {
  return (
    <div>
    <Tab.Group>
      <Tab.List  className="flex space-x-1 rounded-xl bg-white-900/20 p-1">
        <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black-700">
          Shop
        </Tab>

        <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black-700">
          Content
        </Tab>

        <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black-700">
          Reviews
        </Tab>
      </Tab.List>

      <Tab.Panels className={styles.tab}>
      <Tab.Panel className="rounded-xl bg-white p-3">
      <div className="grid grid-cols-2 gap-y-8 lg:gap-y-20 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-5">
        <div>
          <div className={styles.card}>
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt=""/>
            <h1>Bottle</h1>
            <p className={styles.price}>$59.99</p>
            <p>lorem ipsum dolor amet</p> <br/>
            <p><button className="bg-black text-white p-2 text-center">+ cart</button></p>
          </div>
        </div>

       
      </div>

      </Tab.Panel>
      <Tab.Panel className="rounded-xl bg-white p-3">
        <div className="grid grid-cols-2 gap-y-8 lg:gap-y-20 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-5">
          <div>
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"/>
          </div>
          
          <div>
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"/>
          </div>

          <div>
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"/>
          </div>

          <div>
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"/>
          </div>
        </div>
      </Tab.Panel>
      <Tab.Panel className="rounded-xl bg-white p-3">
          <div className={styles.reviews}>
            <div className={styles.box}>
              <div className={styles.profile}>
                <img src="https://images.unsplash.com/photo-1648737965402-2b9c3f3eaa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className={styles.img} />
                <div className={styles.bio}>
                  <h2>Jane Doe</h2>
                </div>
              </div>
              <div className={styles.qoute}>
                <p>
                  Lorem ipsum dolor psum dolor sit amet consectetur psum dolor sit amet consectetur sit amet consectetur adipisicing elit. Sit commodi quis perspiciatis veritatis excepturi est
                </p>
              </div>
            </div>
            
            <div className={styles.box}>
              <div className={styles.profile}>
                <img src="https://images.unsplash.com/photo-1655813678352-e7647461724d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className={styles.img}/>
                <div className={styles.bio}>
                  <h2>Lorem Ipsum</h2>
                </div>
              </div>
              <div className={styles.qoute}>
                <p>
                  Lorem ipsum dolor psum dolor sit amet consectetur psum dolor sit amet consectetur sit amet consectetur adipisicing elit. Sit commodi quis perspiciatis veritatis excepturi est
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.profile}>
                <img src="https://images.unsplash.com/photo-1653656120693-c987723b2046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" className={styles.img} />
                <div className={styles.bio}>
                  <h2>Mitchell Pritchett</h2>
                </div>
              </div>
              <div className={styles.qoute}>
                <p>
                  Lorem ipsum dolor psum dolor sit amet consectetur psum dolor sit amet consectetur sit amet consectetur adipisicing elit. Sit commodi quis perspiciatis veritatis excepturi est
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.profile}>
                <img src="https://images.unsplash.com/photo-1655857202782-8d0ef8f0254b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80" alt="" className={styles.img} />
                <div className={styles.bio}>
                  <h2>Matilda Babosa</h2>
                </div>
              </div>
              <div className={styles.qoute}>
                <p>
                  Lorem ipsum dolor psum dolor sit amet consectetur psum dolor sit amet consectetur sit amet consectetur adipisicing elit. Sit commodi quis perspiciatis veritatis excepturi est
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.profile}>
                <img src="https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" className={styles.img} />
                <div className={styles.bio}>
                  <h2>Manny Nanny</h2>
                </div>
              </div>
              <div className={styles.qoute}>
                <p>
                  Lorem ipsum dolor psum dolor sit amet consectetur psum dolor sit amet consectetur sit amet consectetur adipisicing elit. Sit commodi quis perspiciatis veritatis excepturi est
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.profile}>
                <img src="https://images.unsplash.com/photo-1655899307814-5210d02b9e05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=402&q=80" alt="" className={styles.img} />
                <div className={styles.bio}>
                  <h2>Alex Dunphy</h2>
                </div>
              </div>
              <div className={styles.qoute}>
                <p>
                  Lorem ipsum dolor psum dolor sit amet consectetur psum dolor sit amet consectetur sit amet consectetur adipisicing elit. Sit commodi quis perspiciatis veritatis excepturi est
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.profile}>
                <img src="https://images.unsplash.com/photo-1655900016340-243a6b3557e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className={styles.img} />
                <div className={styles.bio}>
                  <h2>Jack Sparrow</h2>
                </div>
              </div>
              <div className={styles.qoute}>
                <p>
                  I owned a ship, sit amet consectetur psum dolor sit amet consectetur sit amet consectetur adipisicing elit. Sit commodi quis perspiciatis veritatis excepturi est
                </p>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.profile}>
                <img src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className={styles.img} />
                <div className={styles.bio}>
                  <h2>Adebolu Marcus</h2>
                </div>
              </div>
              <div className={styles.qoute}>
                <p>
                  Lorem ipsum dolor psum dolor sit amet consectetur psum dolor sit amet consectetur sit amet consectetur adipisicing elit. Sit commodi quis perspiciatis veritatis excepturi est
                </p>
              </div>
            </div>
          </div>
          {/* <button className={styles.button}>Load more</button> */}
      </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
  )
}

  export default MyTabs;