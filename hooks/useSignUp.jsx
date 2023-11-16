import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/user/userSlice'


const useSignUp = () => {
    const dispatch = useDispatch()

    const mutation = useMutation({
        mutationFn: async ({ email, password1, password2 }) => {
            const res = await fetch("https://altclan-api-v1.onrender.com/dj-rest-auth/registration/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({ username: email, email, password1, password2 }),
                credentials: "include"
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

export default useSignUp