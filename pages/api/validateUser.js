import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"


export default function handler(req, res) {
    try {

        res.status(200).json({ email: "sodiqalao38@gmail.com", id: 3 })
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "user unauthorized", error })
    }

}