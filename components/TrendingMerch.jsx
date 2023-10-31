import React from "react";
import CarouselWrapper from "./CarouselWrapper";
import ProductCard from "./product-card/ProductCard";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function TrendingMerch() {
	const brands = [1, 2, 3, 4];
	const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const carouselBreakpoints = {
		640: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	};

	const { data, isLoading, error } = useSWR(
		"https://altclan-api-v1.onrender.com/api/merchandises/",
		fetcher
	);

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
					Error: <span className="text-red-600">{error}</span>
				</h3>
			</div>
		);
	}

	const num = 2;
	num.toLocaleString();

	console.log(data);

	return (
		<>
			<div className="p-5 pt-5 ">
				<h1 className="text-center text-4xl capitalize">
					Trending Merchandise
				</h1>
				<br />
				<CarouselWrapper
					slidesPerView={2}
					spaceBetween={10}
					breakpoints={carouselBreakpoints}
					controls
				>
					{data.map((d, i) => {
						if (i <= 10) {
							return <ProductCard key={d.id} data={d} />;
						}
					})}
				</CarouselWrapper>
			</div>
		</>
	);
}
