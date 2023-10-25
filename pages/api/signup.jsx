//import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function handler(req, res) {
	// const externalApiUrl = "http://127.0.0.1:8000/api/users/";
	const { email, password } = req.body;
	
	const setCookie = (name, value, days) => {
		const expires = new Date();
		expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
		const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;httpOnly;`
		res.setHeader('Set-Cookie', cookie);
	};

	// Sign the user credentials
	const token = jwt.sign({ email, password }, "secretkey", { expiresIn: "24h" });
	
	setCookie("auth", token)
	

	res.status(200).json({ token })
	
	// fetch(externalApiUrl, {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	 
	// 	},
	// 	body:JSON.stringify({email, password, token})
	// })



}


