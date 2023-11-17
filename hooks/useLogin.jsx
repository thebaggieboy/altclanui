import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/user/userSlice'
import { useMutation } from '@tanstack/react-query'

const useLogin = () => {
    const dispatch = useDispatch()

    const mutation = useMutation({
        mutationFn: async ({ username, email, password }) => {
            const res = await fetch("https://altclan-api-v1.onrender.com/dj-rest-auth/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
                credentials:'include'
            })
            const data = await res.json()

            if (res.status >= 200 & res.status <= 209) {
                return data.user
            }

            const error = { ...data }
            throw error
        },
        onSuccess: (user) => {
            dispatch(setUser(user))
        }
    })

    return mutation
}

export default useLogin