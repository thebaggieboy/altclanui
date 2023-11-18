import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser, setUserType } from '../features/user/userSlice'
import { useMutation, useQuery } from '@tanstack/react-query'

const useLogin = (url, actionFn, userType) => {
    const dispatch = useDispatch()

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
            const token = data.access
            const refresh_token = data.refresh
            console.log(data.access)
            

            if (res.status >= 200 & res.status <= 209) {
                const profileRes = await fetch("https://altclan-api-v1.onrender.com/api/users/" + data.user.pk + "/")
                const profile = await profileRes.json()
                return profile
            }

            const error = { ...data }
            throw error
        },
        onSuccess: (user) => {
            console.log(user)
            dispatch(setUserType(userType))
            dispatch(actionFn(user))
        }
    })

    return mutation
}

export default useLogin