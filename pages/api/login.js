//import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'
import { useState } from 'react';
import useBrands from "../../../hooks/useBrands"

export default function handler(req, res) {

    //const externalApiUrl = 'http://127.0.0.1:8000/api/users/'
	const externalApiUrl = useBrands('https://altclan-api-v1.onrender.com/api/users/')
    const { email, password, token }  = req.body;

    const setCookie = (name, value, days) => {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;secure;HttpOnly;`;
        console.log('Cookie Name: ' + name)
      };

      
    // Sign the user credentials
    jwt.sign({email, password}, 'secretkey', { expiresIn:'24h' }, (err, token)=>{
        res.statusCode(200)
        res.json({
            token
        })
        setCookie('jwtToken', token, 7); // Set the JWT token in the cookie for 7 days   
    })
    console.log('Api Route')
    console.log('Going to external api')    
    console.log(`Email: ${email}, Password: ${password}, Token: ${token}`)

    
}
