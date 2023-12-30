import React from "react";
import CarouselWrapper from "./CarouselWrapper";
import ProductCard from "./product-card/ProductCard";
import useBrands from '../hooks/useBrands'
import BrandCard from "./BrandCard"

export default function TrendingBrands() {
	const brands = [1, 2, 3, 4, 5];
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

	const { data, isLoading, error } = useBrands("https://altclan-brands-api.onrender.com/api/brand_users/")

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

	console.log("Trending brands: ", data);

	return (
		<>
			<div className="p-5 pt-5 mt-3">
				<h4 className="text-center text-2xl capitalize">
					Trending Brands
				</h4>
				<br />
				<CarouselWrapper
					slidesPerView={2}
					spaceBetween={10}
					breakpoints={carouselBreakpoints}
					controls
				>
					{data.map((d, i) => {
						if (i <= 10) {
							return <BrandCard key={d.id} data={d} />;
						}
					})}
				</CarouselWrapper>
			</div>
		</>
	);
}
