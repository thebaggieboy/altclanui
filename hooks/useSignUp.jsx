import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { USER_TYPES, setUser, setUserType } from '../features/user/userSlice'
import fetchProfileData from '../lib/fetchProfileData'


const useSignUp = (url, actionFn, userType) => {
    const dispatch = useDispatch()

    const isBrand = userType === USER_TYPES.brand

    const mutation = useMutation({
        mutationFn: async ({ email, password1, password2 }) => {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: email, email, password1, password2 }),
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

export default useSignUp