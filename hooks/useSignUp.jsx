import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { USER_TYPES, setUser, setUserType } from '../features/user/userSlice'
import fetchProfileData from '../lib/fetchProfileData'


const useSignUp = (url, successCallback, userType) => {
    const isBrand = userType === USER_TYPES.brand

    const mutation = useMutation({
        mutationFn: async ({ email, password, first_name, last_name, mobile_number, display_picture}) => {
            const res = await fetch(url, {
                method: "POST",
                headers: {

                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, first_name, last_name, mobile_number, display_picture:null}),
                credentials: "include"

            })
            const data = await res.json()

            if (res.status >= 200 & res.status <= 209) {
				console.log("New User Registered.")
				console.log(data)
                const id = data.id
                const profile = await fetchProfileData(id, USER_TYPES.user)
                return profile
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

export default useSignUp