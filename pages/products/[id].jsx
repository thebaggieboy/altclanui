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
	const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
	const { selectedProducts, setSelectedProducts } = useContext(ProductContext);
	const [open, setOpen] = useState(false);
	console.log(merch.available_sizes)
	console.log(merch.available_colors)

	console.log(Number("1,000".replace(",", "")));
	function addToCart() {
		const data = {
			itemId: merch.id,
			size: selectedSize.name,
			color: selectedColor.name,
			qty: 1,
			price: merch.price,
		};
		dispatch(addItem(data));
	}

	return (
		<div className="bg-white">
			<div className="pt-6">
				<nav aria-label="Breadcrumb">
					<ol
						role="list"
						className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
					>
						{product.breadcrumbs.map((breadcrumb) => (
							<li key={breadcrumb.id}>
								<div className="flex items-center">
									<Link
										href={breadcrumb.href}
										className="mr-2 text-sm font-medium text-gray-900"
									>
										{breadcrumb.name}
									</Link>
									<svg
										width={16}
										height={20}
										viewBox="0 0 16 20"
										fill="currentColor"
										aria-hidden="true"
										className="h-5 w-4 text-gray-300"
									>
										<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
									</svg>
								</div>
							</li>
						))}
						<li className="text-sm">
							<Link
								href={"#"}
								aria-current="page"
								className="font-medium text-gray-500 hover:text-gray-600"
							>
								{merch.merchandise_name}
							</Link>
						</li>
					</ol>
				</nav>

				{/* Image gallery */}


				<div class="grid gap-4 p-5">
					<div>
						<img class="h-auto max-w-full rounded-lg text-center" src={merch.display_image} alt="" />
					</div>
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


				{/* Product info */}
				<div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
					<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
							{merch.merchandise_name}
						</h1>
					</div>

					{/* Options */}
					<div className="mt-4 lg:row-span-3 lg:mt-0">
						<h2 className="sr-only">Product information</h2>
						<p className="text-3xl tracking-tight text-gray-900">
							₦{merch.price}
						</p>

						{/* Reviews */}
						<div className="mt-6">
							<h3 className="sr-only">Reviews</h3>
							<div className="flex items-center">
								<div className="flex items-center">
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={classNames(
												reviews.average > rating
													? "text-gray-900"
													: "text-gray-200",
												"h-5 w-5 flex-shrink-0"
											)}
											aria-hidden="true"
										/>
									))}
								</div>
								<p className="sr-only">{reviews.average} out of 5 stars</p>
								<Link
									href={reviews.href}
									className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
								>
									{reviews.totalCount} reviews
								</Link>
							</div>
						</div>

						<div className="mt-10">
							{/* Colors */}
							<div>
								<h3 className="text-sm font-medium text-gray-900">Color</h3>

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

							{/* Sizes */}
							<div className="mt-10">
								<div className="flex items-center justify-between">
									<h3 className="text-sm font-medium text-gray-900">Size</h3>
									<Link
										href="#"
										className="text-sm font-medium text-black hover:text-beige"
									>
										Size guide
									</Link>
								</div>

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

							<button
								onClick={addToCart}
								className="mt-10 flex w-full items-center justify-center rounded-md border border-black bg-black px-8 py-3 text-base font-medium text-white  focus:ring-black focus:ring-offset-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-5 w-5"
								>
									<path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
								</svg>
							</button>
						</div>
					</div>

					<div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
						{/* Description and details */}
						<div>
							<h3 className="sr-only">Description</h3>

							<div className="space-y-6">
								<p className="text-base text-gray-900">{merch.merchandise_description}</p>
							</div>
						</div>

						<div className="mt-10">
							<h2 className="text-sm font-medium text-gray-900">Details</h2>

							<div className="mt-4 space-y-6">
								<p className="text-sm text-gray-600">{merch.merchandise_details}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
