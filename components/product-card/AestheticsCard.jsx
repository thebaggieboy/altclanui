import { useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiHeart } from "react-icons/fi";

import Link from "next/link";

const AestheticsCard = ({ data }) => {
	const [liked, setLiked] = useState(false);
	

	const { aesthetic_name, aesthetic_image, id } = data;

	return (
		<div className="product-card">
			<div className="product-card__img relative">
				<Image src={aesthetic_image} fill alt={aesthetic_name} />
			</div>
			<div className="product-card__content">
				<div className="product-card__info">
					<h1 className="product-card__name">{aesthetic_name}</h1>
					
				</div>
				<div className="product-card__actions flex flex-col items-center justify-between gap-y-3">
					
				
				</div>
			</div>
		</div>
	);
};

export default AestheticsCard;
