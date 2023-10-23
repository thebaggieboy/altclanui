//import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { useRouter,useContext } from "next/router";
import { TokenContext } from "../../context/TokenContext";
import bcrypt from "bcrypt"

export default function handler(req, res) {
	//const externalApiUrl = "http://127.0.0.1:8000/api/users/";
	const externalApiUrl = useBrands('https://altclan-api-v1.onrender.com/api/users/')
  
	const {email, password} = req.body
	
	const saltRounds = 10;

	function hashPassword(password){
		bcrypt
		.hash(password, saltRounds)
		.then(hash => {
		  console.log(`Hash: ${hash}`);
		  // Store hash in your password DB.
		  //password = hash
		  console.log("New password hash: ", hash )	
	  
		})
		.catch(err => console.error(err.message));
	}


	
  const setCookie = (name, value, days) => {
	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;httpOnly;`
	res.setHeader('Set-Cookie', cookie);
};

// Sign the user credentials
const token = jwt.sign({ email, password }, "secretkey", { expiresIn: "24h" });

setCookie("token", token)
console.log('Token: ', token)

res.status(200).json({ token })

  fetch(externalApiUrl, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
 
	},
	body:JSON.stringify({email, password, token})
})

}


