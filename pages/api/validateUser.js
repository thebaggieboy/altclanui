import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"


export default function handler(req, res) {

    try {
        const claims = jwt.verify(req.cookies.auth, "secretkey")
        res.status(200).json({ email: claims.email })
    } catch (error) {
        res.status(401).json({ message: "user unauthorized", error })
    }

}