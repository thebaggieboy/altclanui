//import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { useRouter, useContext } from "next/router";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
	const externalApiUrl = "http://127.0.0.1:8000/dj-rest-auth/login/";
	//const externalApiUrl = "https://altclan-api-v1.onrender.com/api/brand_users/";

	let {  username, email, password  } = req.body;
	
    await fetch(externalApiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({  username:email, email, password  }),
    })
        .then(async (response) => {
            if (response.status >= 200 && response.status <= 209) {
                //setCookie("brand_token", token);
                res.status(response.status).json({ message: "brand user created" });
                return
            }
            const data = await response.json()
            res.status(response.status).json({ err: data });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        })


}
