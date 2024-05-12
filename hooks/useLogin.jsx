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

	 
        
	 
    const mutation = useMutation({
        mutationFn: async ({ username, email, password }) => {
            if(token !== null || token !== undefined){
                const arrayToken = token?.split('.');
                const tokenPayload = JSON.parse(atob(arrayToken[1]));	
               
                console.log("Token Payload ID: ", tokenPayload?.user_id);
                
              
               
    }
            
    const current_user = await fetch("https://altclan-api-v1.onrender.com/auth/users/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
      
        credentials: "include"
    })
    const currentData = await current_user.json()
        
       
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
                credentials: "include"
            })
            
            dispatch(setToken(currentData.access))
         
         
        },
        onSuccess: (user) => {
            successCallback(user)
        }
    })

    return mutation
}

export default useLogin