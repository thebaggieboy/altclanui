import React, { useState, useContext, Component } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import useData from "../../hooks/useData";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/shop/shopSlice";
import Link from "next/link";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import fetchProductData from '../../lib/fetchProductData'
import Review from "./../../components/Review"
const queryClient = new QueryClient()

export async function getServerSideProps(context) {
	const id = context.params.id;
	const data = await queryClient.fetchQuery({ queryKey: ["product", id], queryFn: () => fetchProductData(id) })
	console.log(data, id)
	return {
		props: { merch: data },
	};
}

const product = {
	breadcrumbs: [
		{ id: 1, name: "Men", href: "#" },
		{ id: 2, name: "Clothing", href: "/products" },
	],

	colors: [
		{ name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
		{ name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
		{ name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
	],
	sizes: [
		{ name: "XXS", inStock: false },
		{ name: "XS", inStock: true },
		{ name: "S", inStock: true },
		{ name: "M", inStock: true },
		{ name: "L", inStock: true },
		{ name: "XL", inStock: true },
		{ name: "2XL", inStock: true },
		{ name: "3XL", inStock: true },
	],
	description:
		'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
	highlights: [
		"Hand cut and sewn locally",
		"Dyed with our proprietary colors",
		"Pre-washed & pre-shrunk",
		"Ultra-soft 100% cotton",
	],
	details:
		'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function ProductDetail({ _id, merch }) {
	const dispatch = useDispatch();
	const [selectedColor, setSelectedColor] = useState(product.colors[0]);
	const [selectedSize, setSelectedSize] = useState(merch.available_sizes[1]);
	const { selectedProducts, setSelectedProducts } = useContext(ProductContext);
	const [open, setOpen] = useState(false);
	
	function addToCart() {
		const data = {
			itemId: merch.id,
			size: selectedSize,
			color: selectedColor.name,
			qty: 1,
			price: merch.price,
		};
		dispatch(addItem(data));
	}


	


	return (
		<>
	<div class="bg-white dark:bg-gray-800 py-8" style={{fontFamily:"Poppins, Sans-serif", lineHeight:1}}>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src={merch.display_image} alt="Product Image"/>
                </div>
				<div>
        
				<div class="grid gap-4 p-5">
				
					<div class="grid grid-cols-5 gap-4">
						<div>
							<img class="h-auto max-w-full rounded-lg" src={merch.display_image} alt="" />
						</div>
						<div>
							<img class="h-auto max-w-full rounded-lg" src={merch.display_image} alt="" />
						</div>
						<div>
							<img class="h-auto max-w-full rounded-lg" src={merch.display_image} alt="" />
						</div>
						<div>
							<img class="h-auto max-w-full rounded-lg" src={merch.display_image} alt="" />
						</div>
						<div>
							<img class="h-auto max-w-full rounded-lg" src={merch.display_image} alt="" />
						</div>
					</div>
				</div>
    </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <button onClick={addToCart} class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 style={{fontFamily:"Poppins, Sans-Serif"}} class="text-2xl font-bold text-black dark:text-white mb-2">{merch.merchandise_name}</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
				{merch.details}
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span style={{fontFamily:"Poppins, Sans-Serif"}} class="font-bold text-black dark:text-gray-300">Price:</span>
                        <span class="text-gray-600 dark:text-gray-300">₦{merch.price}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span class="text-black dark:text-gray-300">In Stock</span>
                    </div>
                </div> <br />
                <div class="mb-4">
                    <span class="font-bold text-black dark:text-gray-300">Select Color:</span>
                    <div class="flex items-center mt-2">

					<RadioGroup
									value={selectedColor}
									onChange={setSelectedColor}
									className="mt-4"
								>
									<RadioGroup.Label className="sr-only">
										{" "}
										Choose a color{" "}
									</RadioGroup.Label>
									<div className="flex items-center space-x-3">
										{merch.available_colors && merch.available_colors.map((color) => (
											<RadioGroup.Option
												key={color.name}
												value={color}
												className={({ active, checked }) =>
													classNames(
														color.selectedClass,
														active && checked ? "ring ring-offset-1" : "",
														!active && checked ? "ring-2" : "",
														"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
													)
												}
											>
												<RadioGroup.Label as="span" className="sr-only">
													{" "}
													{color.name}{" "}
												</RadioGroup.Label>
												<span
													aria-hidden="true"
													className={classNames(
														color.class,
														"h-8 w-8 rounded-full border border-black border-opacity-10"
													)}
												/>
											</RadioGroup.Option>
										))}
									</div>
								</RadioGroup>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-black dark:text-gray-300">Select Size:</span>
                    <div class="flex items-center mt-2">
<div className="mt-10">
								

								<RadioGroup
									value={selectedSize}
									onChange={setSelectedSize}
									className="mt-4"
								>
									<RadioGroup.Label className="sr-only">
										{" "}
										Choose a size{" "}
									</RadioGroup.Label>
									<div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
										{merch.available_sizes && merch.available_sizes.map((size) => (
											<RadioGroup.Option
												key={size.name}
												value={size}

												className={({ active }) =>
													classNames(
														size
															? "cursor-pointer bg-white text-gray-900 shadow-sm"
															: "cursor-not-allowed bg-gray-50 text-gray-200",
														active ? "ring-2 ring-indigo-500" : "",
														"group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
													)
												}
											>
												{({ active, checked }) => (
													<>
														<RadioGroup.Label as="span">
															{size}
														</RadioGroup.Label>
														{size ? (
															<span
																className={classNames(
																	active ? "border" : "border-2",
																	checked
																		? "border-indigo-500"
																		: "border-transparent",
																	"pointer-events-none absolute -inset-px rounded-md"
																)}
																aria-hidden="true"
															/>
														) : (
															<span
																aria-hidden="true"
																className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
															>
																<svg
																	className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
																	viewBox="0 0 100 100"
																	preserveAspectRatio="none"
																	stroke="currentColor"
																>
																	<line
																		x1={0}
																		y1={100}
																		x2={100}
																		y2={0}
																		vectorEffect="non-scaling-stroke"
																	/>
																</svg>
															</span>
														)}
													</>
												)}
											</RadioGroup.Option>
										))}
									</div>
								</RadioGroup>
							</div>

                    </div>
                </div>
                <div>
                    <span class="font-bold text-black dark:text-gray-300">Product Description:</span>
                    <p class="text-black dark:text-gray-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<hr />
		<div className="bg-white">
			<div className="pt-6">
			<Review/>
			</div>
		</div> <br /><br />
		</>
	);
}
