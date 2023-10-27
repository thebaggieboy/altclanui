//import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { useRouter } from "next/router";
import useBrands from "../../../hooks/useBrands"

export default function handler(req, res) {
	//const externalApiUrl = "http://127.0.0.1:8000/api/users/";
	const externalApiUrl = useBrands('https://altclan-api-v1.onrender.com/api/users/')
	const { email, password } = req.body;


	
	const setCookie = (name, value, days) => {
		const expires = new Date();
		expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
		const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;httpOnly;`
		res.setHeader('Set-Cookie', cookie);
		res.status(200).send("Cookie has been sent")
		
		
	};

	// Sign the user credentials
	const token = jwt.sign({ email, password }, "secretkey", { expiresIn: "24h" });

	setCookie("token", token)
	console.log('Token: ', token)
	const auth = req.cookies.authorization
	console.log("Auth: ", auth)

	res.status(200).json({email,password, token })



}


