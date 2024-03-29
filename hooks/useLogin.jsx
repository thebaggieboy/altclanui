import { USER_TYPES, } from '../features/user/userSlice'
import { useMutation} from '@tanstack/react-query'
import fetchProfileData from '../lib/fetchProfileData'

const useLogin = (url, successCallback, userType) => {
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
            successCallback(user)
        }
    })

    return mutation
}

export default useLogin