import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { setUser, setUserType } from '../features/user/userSlice'


const useSignUp = (url, actionFn, userType) => {
    const dispatch = useDispatch()

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
            console.log(data)

            if (res.status >= 200 & res.status <= 209) {
                const user = { ...data.user, id: data.user.pk }
                delete user["pk"]
                return user
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