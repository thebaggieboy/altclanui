
import { parseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import fetchProfileData from './fetchProfileData'
import { USER_TYPES } from '../features/user/userSlice';
import { selectToken, setToken } from '../features/token/tokenSlice';
import { useDispatch, useSelector } from "react-redux";
 


export async function fetchUser() {
    const docCookies = parseCookie(document.cookie)
    console.log("docCookies", docCookies)
    const userType = docCookies.get("user_type")
    

    const url = userType === USER_TYPES.brand ? "https://altclan-brands-1-1.onrender.com/api/users/" : userType === USER_TYPES.user
        && "https://altclan-api-v1.onrender.com/api/users/"

    const res = await fetch(url, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json()
    console.log(data)

    if (res.status >= 200 && res.status <= 209) {
        const profile = await fetchProfileData(data.id, userType === USER_TYPES.brand)
        return profile
    
    }

    const err = { ...data }
    throw err
}