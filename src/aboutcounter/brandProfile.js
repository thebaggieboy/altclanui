import { Tab } from '@headlessui/react';
import React from 'react'; 
import styles from "../../styles/brand.module.css";
import { USER_TYPES, selectUser, selectUserType } from '../../features/user/userSlice';
import { selectBrandUser, setBrandUser } from '../../features/brands/brandUserSlice';
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import useBrands from "../../hooks/useBrands"
import Link from "next/link"
const MyTabs = ({
  id,
  display_image,
  imageAlt,
  brand_name,
  merchandise_name,
  merchandise_type,
  labels,
  price,
}) => {
  const loading = false;
  //const error = null;
  const brand_user = useSelector(selectUser);
  const router = useRouter();
  const searchQuery = brand_user?.brand_name
  const { data, isLoading, error } = useBrands("https://altclan-brands-api.onrender.com/api/merchandises/")

  const results = data?.filter(product => product.brand_name == searchQuery)
  console.log("Results: " + results)
  console.log("brand_user: " + brand_user.brand_name)

  if (isLoading) {
		return (
			<div className="p-5 pt-5">
				<h1>Loading...</h1>
			</div>
		);
	}

	if (error) {
		return (
			<div className="p-5">
				<h3>
					<span className="text-red-600">{error.message}</span>
				</h3>
			</div>
		);
	}
  console.log(data)

  return (
    <div>
    <Tab.Group>
      <Tab.List  className="flex space-x-1 rounded-xl bg-white-900/20 p-5 pt-5">
        <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black-700">
          Shop
        </Tab>

       

        <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black-700">
          Reviews
        </Tab>
      </Tab.List>

      <Tab.Panels className={styles.tab}>
      <Tab.Panel className="rounded-xl bg-white p-3">
      <div className="lg:col-span-3 mt-2">
								<div className="mx-auto max-w-2xl  px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
									<div className=" grid grid-cols-2 gap-x-6 gap-y-10  lg:grid-cols-3 xl:gap-x-8">
										{results?.map(
											({
												id,
												display_image,
												imageAlt,
												brand_name,
												merchandise_name,
												merchandise_type,
												labels,
												price,
											}) => (
												<div key={id} className="group relative">
													<div className="min-h-100 aspect-h-1 aspect-w-1 w-full overflow-hidden  lg:aspect-none group-hover:opacity-75 lg:h-80">
														<Link href={`/products/${id}`}>
															<img
																src={display_image}
																alt={imageAlt}
																className="h-full w-full object-cover object-center lg:h-full lg:w-full"
															/>
															
														</Link>
													</div>
													<Link href={`/products/${id}`}>

													
													<div className="flex pt-3 justify-between">
														<div>
														<div className="container text-gray-500 text-xs">
															{labels !== "None" ?
															 <span style={{backgroundColor:'#F5F5DC', borderRadius:0, fontSize:10}} class=" text-black me-2 px-2.5 py-0.5 rounded dark:bg-black dark:text-white border border-black">
															{labels}
															</span> : ""}

														
															</div>
															<h3 className="text-sm pt-2  text-black">
																{/* An element here was covering the whole card making the add to cart unclickable */}
																{merchandise_name} 
															</h3> <span style={{fontSize:12}}>by</span> <span style={{fontSize:13, fontStyle:"italic"}}>{brand_name} (You)</span> 
															
															<p style={{fontWeight:'bold'}}  className="text-xs pt-1 text-gray-900">
																₦{price}
															</p>

														
														</div>

												
													</div>
													</Link>
												</div>
											)
										)}
									</div>
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