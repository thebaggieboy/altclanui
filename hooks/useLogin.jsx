import React from 'react'
import { useDispatch } from 'react-redux'
import { USER_TYPES, setUser, setUserType } from '../features/user/userSlice'
import { useMutation, useQuery } from '@tanstack/react-query'
import fetchProfileData from '../lib/fetchProfileData'

const useLogin = (url, actionFn, userType) => {
    const dispatch = useDispatch()

    const isBrand = userType === USER_TYPES.brand

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
                const id = data.user.pk
                const profile = await fetchProfileData(id, isBrand)
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