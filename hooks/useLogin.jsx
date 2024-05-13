import { USER_TYPES, } from '../features/user/userSlice'
import { useMutation} from '@tanstack/react-query'
import fetchProfileData from '../lib/fetchProfileData'
import {selectToken, setToken} from '../features/token/tokenSlice'
import {selectUser, setUser} from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux";
import useData from './useData'
import { selectUserEmail, setUserEmail } from '../features/user/userActiveEmail'
import { useRouter } from 'next/router'
import { useState } from 'react'

 

const useLogin = (url, successCallback, userType) => {
    const user = useSelector(selectUser)
    const user_email = useSelector(selectUserEmail)
    const token = useSelector(selectToken)
    const router = useRouter()
    const dispatch = useDispatch()
    const isBrand = userType === USER_TYPES.brand
    //const { data, loading } = useData("https://altclan-api-v1.onrender.com/api/users/")
	const [profileQuery, setProfileQuery] = useState([]);
	 
	const [userResult, setUserResult] = useState([])
	
    async function fetchUsers(){
		console.log("Fetching users ... ")
		const  url = "https://altclan-api-v1.onrender.com/api/users/"
		const res =  await fetch(url, {
			method: "GET",
			headers: {
			
				"Content-Type": "application/json"
			},
		})
	
		const data = await res.json()
	
        if (user_email !== null || user_email !== undefined){
			let filteredUsers = data.filter((user) => {
				return user.email === user_email;
			});
			setUserResult(filteredUsers)
			console.log("User Result: ", userResult)
            
	  
        }else{
            console.log("User Email is Empty")
        }
	
	}


	console.log("Loading mutation")
    const mutation = useMutation({
        mutationFn: async ({ username, email, password }) => {
            const res = await fetch(url, {
                method: "POST",
                headers: {

                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password}),
                credentials: "include"

            })
            const data = await res.json()
            console.log("", data)
            dispatch(setToken(data?.access))
           
            const  url2 = "https://altclan-api-v1.onrender.com/api/users/"
            const res2 =  await fetch(url2, {
                method: "GET",
                headers: {
                
                    "Content-Type": "application/json"
                },
            })
        
            const data2 = await res2.json()
        
            if (user_email !== null || user_email !== undefined){
                let filteredUsers = data2.filter((user) => {
                    return user.email === user_email;
                });
              
                console.log("User Result: ", filteredUsers)
                dispatch(setUser(filteredUsers))
          
            }
           
            

          
            if (res.status >= 200 & res.status <= 209) {
               // fetchUsers()
               if(token !== null){
                const arrayToken = token.split('.');
                const tokenPayload = JSON.parse(atob(arrayToken[1]));	
                console.log("Token Payload ID: ", tokenPayload?.user_id);
                const url = `https://altclan-api-v1.onrender.com/api/users/${tokenPayload?.user_id}`
        
            
       
            }
              
                return
                    
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