//import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { useRouter, useContext } from "next/router";
import { TokenContext } from "../../context/TokenContext";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
	//const externalApiUrl = "http://127.0.0.1:8000/api/users/";
	const externalApiUrl = "https://altclan-api-v1.onrender.com/api/users/";

	let { email, password } = req.body;
	const saltRounds = 10;

	const setCookie = (name, value, days) => {
		const expires = new Date();
		expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
		const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;httpOnly;`;
		res.setHeader("Set-Cookie", cookie);
	};

	await bcrypt
		.hash(password, saltRounds)
		.then(async (hash) => {
			console.log(`Hash: ${hash}`);
			// Store hash in your password DB.

			const token = jwt.sign({ email, hash }, "secretkey", {
				expiresIn: "24h",
			});
			console.log("Token: ", token);

			await fetch(externalApiUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password: hash }),
			})
				.then(async (response) => {
					if (response.status >= 200 && response.status <= 209) {
						setCookie("token", token);
						res.status(response.status).json({ message: "user created" });
						return
					}
					const data = await response.json()
					res.status(response.status).json({ err: data });
				})
				.catch((err) => {
					res.status(500).json({ error: err.message });
				})

		})
		.catch((err) => {
			console.error(err.message);
			res.status(500).json({ error: err.message });
		});
}
