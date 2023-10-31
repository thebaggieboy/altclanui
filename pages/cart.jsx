import Link from "next/link";
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	selectCartItems,
	selectCartTotal,
} from "../features/shop/shopSelector";
import CartItem from "../components/CartItem";

export async function getServerSideProps(context) {
	const res = await fetch(
		`https://altclan-api-v1.onrender.com/api/merchandises`
	);
	//const res = await fetch(`http://127.0.0.1:8000/api/merchandises/${id}`);
	const data = await res.json();
	console.log(data);

	return {
		props: { merchs: data },
	};
}

export default function Cart({ merchs }) {
	const [show, setShow] = useState(false);

	const cartItems = useSelector(selectCartItems);
	const total = useSelector(selectCartTotal);
	const shippingFee = 8;
	const grandTotal = shippingFee + total;

	if (cartItems.length < 1) {
		return (
			<>
				<div className="text-black-700 mb-10 mt-10 p-10 text-center">
					<p>There are no items in your cart</p>
					<br />
					<button className="bg-rounded bg-black p-3 text-white">
						{" "}
						<Link href="/products">Start shopping</Link>{" "}
					</button>
				</div>
			</>
		);
	}

	return (
		<>
			<section className="bg-gray-100 py-6 sm:py-16 lg:py-20">
				<div className="mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-center">
						<h1 className="text-2xl font-semibold text-gray-900">
							{" "}
							<Link href="/products">Your Cart</Link>{" "}
						</h1>
					</div>

					<div className="mx-auto mt-8 max-w-2xl md:mt-12">
						<div className="bg-white shadow">
							<div className="px-4 py-6 sm:px-8 sm:py-10">
								<div className="flow-root">
									{cartItems.map((item) => {
										const data = merchs.find((m) => m.id === item.itemId);
										return (
											<CartItem key={item.id} data={{ ...item, ...data, cartId: item.id }} />
										);
									})}
								</div>

								<div className="mt-6 border-b border-t py-2">
									<div className="flex items-center justify-between">
										<p className="text-sm text-gray-400">Subtotal</p>
										<p className="text-lg font-semibold text-gray-900">
											${total.toLocaleString()}
										</p>
									</div>
									<div className="flex items-center justify-between">
										<p className="text-sm text-gray-400">Shipping</p>
										<p className="text-lg font-semibold text-gray-900">
											${shippingFee.toFixed(2)}
										</p>
									</div>
								</div>
								<div className="mt-6 flex items-center justify-between">
									<p className="text-sm font-medium text-gray-900">Total</p>
									<p className="text-2xl font-semibold text-gray-900">
										<span className="text-xs font-normal text-gray-400">
											USD
										</span>{" "}
										{grandTotal.toLocaleString()}
									</p>
								</div>

								<div className="mt-6 text-center">
									<Link
										href="/checkout"
										className="w-full rounded bg-black p-3 text-lg text-white "
									>
										Checkout
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br/><br/>
			</section>
		</>
	);
}
