//import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'
import { useState } from 'react';


export default function handler(req, res) {
    const [authToken, setAuthToken] = useState('');
    const { email, password }  = req.body;

    // Sign the user credentials
    jwt.sign({email, password}, 'secretkey', { expiresIn:'30s' }, (err, token)=>{
        //res.status(200)
        res.json({
            token
        })
        console.log(`Token: ${token}`)
        // Save token in localStorage
        setAuthToken(token)
        console.log(auth)
        console.log(localStorage.setItem('token', authToken));
        // Save token in TokenContext

    })
    

    
    console.log(`Email: ${email}, Password: ${password}`)
}
