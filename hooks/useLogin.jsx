import { USER_TYPES, } from '../features/user/userSlice'
import { useMutation} from '@tanstack/react-query'
import fetchProfileData from '../lib/fetchProfileData'
import {selectToken, setToken} from '../features/token/tokenSlice'
import {selectUser, setUser} from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux";
import useData from './useData'
import { selectUserEmail, setUserEmail } from '../features/user/userActiveEmail'
import { useRouter } from 'next/router'



const useLogin = (url, successCallback, userType) => {
    const user = useSelector(selectUser)
    const user_email = useSelector(selectUserEmail)
    const token = useSelector(selectToken)
    const router = useRouter()
    const dispatch = useDispatch()
    const isBrand = userType === USER_TYPES.brand
    const { data, loading } = useData("https://altclan-api-v1.onrender.com/api/users/")
	async function loginSuccess() {
    
        console.log("Successful Login")
        const today = new Date();
        const oneMonthFromToday = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
        document.cookie = `user_type=user; expires=${oneMonthFromToday.toUTCString()} Path=/`
    
        if(token !== null || token == ""){
            const arrayToken = token.split('.');
            const tokenPayload = JSON.parse(atob(arrayToken[1]));	
            console.log("Token Payload ID: ", tokenPayload?.user_id);
            const url = `https://altclan-api-v1.onrender.com/api/users/${tokenPayload?.user_id}`
    
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        })
    
        const data = await res.json()
        dispatch(setUser(data))
        
        if (res.status >= 200 && res.status <= 209) {
            console.log("user fetch successful")
            console.log("Current User: ", data)
            
           
            //router.push(`/profile/${tokenPayload?.user_id}`)
            
        }
        
        const err = { ...data }
        throw { err }
        
            
        }
        
    
    
    }
	const userProfile = data?.filter((profile) => profile.email === user_email );

    const mutation = useMutation({
        mutationFn: async ({ username, email, password }) => {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
                credentials: "include"
            })
            const data = await res.json()
            dispatch(setToken(data.access))
         
            if(token !== null){
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

export default useLogin