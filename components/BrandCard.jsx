import { useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiHeart } from "react-icons/fi";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const BrandCard = ({ data }) => {
	const [liked, setLiked] = useState(false);
	

	const { brand_name, brand_logo, brand_type, id } = data;

	return (
		<div className="product-card">
			<div className="product-card__img relative">
				<Image src={brand_logo} fill alt={brand_name} />
			</div>
			<div className="product-card__content">
				<div className="product-card__info">
					<h1 className="product-card__name">{brand_name}</h1>
					<p className="product-card__price">{brand_type}</p>
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
					<Link href={`/brands/${id}?brand=${brand_name}`}>
						<button className="product-card__see-more">
							<FiExternalLink className="lg:h-5 lg:w-5" />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BrandCard;
