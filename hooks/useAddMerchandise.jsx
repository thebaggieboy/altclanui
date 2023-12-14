import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'

const useAddMerchandise = () => {
    const router = useRouter()
    const user = useSelector(selectUser)

    const mutation = useMutation({
        mutationFn: async (merchData) => {
            console.log(merchData)
            try {
                const res = await fetch("https://altclan-brands-api.onrender.com/api/merchandises/", {
                    method: "POST",
                    body: JSON.stringify(merchData),
                    headers: {
                        "Content-Type": "application/json"
                    },
                })

                const data = await res.json()
                console.log("seen")

                if (res.status >= 200 && res.status <= 209) {
                    return data
                }

                const err = { ...data }
                throw { err }

            } catch (error) {
                console.log(error)
            }
        },
        onSuccess: (data) => {
            router.push(`/profile/${user.id}`)
            console.log(data)
        }
    })

    return mutation
}

export default useAddMerchandise