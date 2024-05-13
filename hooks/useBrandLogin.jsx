import { USER_TYPES, } from '../features/user/userSlice'
import { useMutation} from '@tanstack/react-query'
import fetchProfileData from '../lib/fetchProfileData'
import {selectBrandToken, setBrandToken} from '../features/brand_token/brandTokenSlice'
import {selectUser, setUser} from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux";
import useData from './useData'
import { selectUserEmail, setUserEmail } from '../features/user/userActiveEmail'
import { useRouter } from 'next/router'



const useBrandLogin = (url, successCallback, userType) => {
    const user = useSelector(selectUser)
    const user_email = useSelector(selectUserEmail)
    const brand_token = useSelector(selectBrandToken)
    const router = useRouter()
    const dispatch = useDispatch()
    const isBrand = userType === USER_TYPES.brand
    //const { data, loading } = useData("https://altclan-brands-api-1-1.onrender.com/api/users/")

	async function loginSuccess() {
    
        console.log("Successful Login")
        const today = new Date();
        const oneMonthFromToday = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
        document.cookie = `user_type=brand; expires=${oneMonthFromToday.toUTCString()} Path=/`
    
        if(brand_token !== null){
            const arrayToken = brand_token.split('.');
            const tokenPayload = JSON.parse(atob(arrayToken[1]));	
            console.log("Token Payload ID: ", tokenPayload?.user_id);
            const url = `https://altclan-brands-api-1-1.onrender.com/api/users/${tokenPayload?.user_id}`
    
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
    
        const data = await res.json()
        
        dispatch(setBrandToken(brand_token.access))
        dispatch(setUser(data))
        
        if (res.status >= 200 && res.status <= 209) {
            console.log("user fetch successful")
            console.log("Current User: ", data)
            const userProfile = data?.filter((profile) => profile.email === user_email );
            console.log("User Profile: ", userProfile)

        }
        
        const err = { ...data }
        throw { err }
        
            
        }
        
    }
	
    const mutation = useMutation({
        mutationFn: async ({ username, email, password }) => {
            
           
            if(brand_token !== null){
                loginSuccess()
            }
           
            if (res.status >= 200 & res.status <= 209) {
             console.log("Login Successful, JWT created successfully")
            
             
            }
            
            

            const error = { ...data }
            throw error
        },
        onSuccess: (user) => {
            successCallback(user)
        }
    })

    return mutation
}

export default useBrandLogin