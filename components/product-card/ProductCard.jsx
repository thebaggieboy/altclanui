import { useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiHeart } from "react-icons/fi";

import Link from "next/link";

const ProductCard = ({ data }) => {
	const [liked, setLiked] = useState(false);
	

	const { merchandise_name, price, display_image, id } = data;

	return (
		<div className="product-card">
			<div className="product-card__img relative">
				<Image src={display_image} fill alt={merchandise_name} />
			</div>
			<div className="product-card__content">
				<div className="product-card__info">
					<h1 className="product-card__name">{merchandise_name}</h1>
					<p className="product-card__price">₦ {price}</p>
				</div>
				<div className="product-card__actions flex flex-col items-center justify-between gap-y-3">
					<button
						onClick={() => setLiked(!liked)}
						className="product-card__like"
					>
						<FiHeart
							className={`heart-svg lg:h-5 lg:w-5 ${
								liked ? "fill-red-600 stroke-none" : ""
							}`}
						/>
					</button>
					<Link href={"/products/" + id}>
						<button className="product-card__see-more">
							<FiExternalLink className="lg:h-5 lg:w-5" />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
