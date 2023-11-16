import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"


export default async function handler(req, res) {
    try {
        const token = req.cookies.token
        const res = await fetch("https://altclan-api-v1.onrender.com/api/dj-rest-auth/token/verify", {
            method: "POST",
            body: {
                token
            }
        })
        res.status(200).json({ email: "sodiqalao38@gmail.com", id: 3 })
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "user unauthorized", error })
    }

}