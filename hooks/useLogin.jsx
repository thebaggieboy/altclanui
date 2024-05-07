import { USER_TYPES, } from '../features/user/userSlice'
import { useMutation} from '@tanstack/react-query'
import fetchProfileData from '../lib/fetchProfileData'
import {selectToken, setToken} from '../features/token/tokenSlice'
import {selectUser, setUser} from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux";
import useData from './useData'
import { selectUserEmail, setUserEmail } from '../features/user/userActiveEmail'




const userData = {
    "id": 13,
    "email": "sureboy@gmail.com",
    "first_name": "",
    "last_name": "",
    "mobile_number": "",
    "display_picture": null
}

const useLogin = (url, successCallback, userType) => {
    const user = useSelector(selectUser)
    const user_email = useSelector(selectUserEmail)
    const token = useSelector(selectToken)
    const dispatch = useDispatch()
    const isBrand = userType === USER_TYPES.brand
    const { data, loading } = useData("https://altclan-api-v1.onrender.com/api/users/")
	
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

            if (res.status >= 200 & res.status <= 209) {
             console.log("Login Successful, JWT created successfully")
             dispatch(setToken(data.access))
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