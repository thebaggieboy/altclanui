//import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'
import { useState } from 'react';


export default function handler(req, res) {
    const { email, password }  = req.body;

    jwt.sign({email, password}, 'secretkey', { expiresIn:'30s' }, (err, token)=>{
        //res.status(200)
        res.json({
            token
        })
        console.log(`Token: ${token}`)
        // Save token in localStorage

    })
    

    
    console.log(`Email: ${email}, Password: ${password}`)
}
