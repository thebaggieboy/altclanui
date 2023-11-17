import { useMutation } from "@tanstack/react-query"
import { useDispatch, } from "react-redux"
import { setUser } from "../features/user/userSlice"


const useUpdateProfileData = (url, id, actionFn) => {
    const dispatch = useDispatch()

    const mutation = useMutation({
        mutationFn: async (newData) => {
            try {
                const res = await fetch(`${url}${id}/`, {
                    method: "PATCH",
                    body: JSON.stringify({ ...newData }),
                    headers: {
                        "Content-Type": "application/json"
                    },

                })

                const data = await res.json()

                if (res.status >= 200 && res.status <= 209) {
                    return data
                }

                const err = { ...data }
                Promise.reject(err).catch(() => { })
                throw { err }

            } catch (error) {
                console.log(error)
            }
        },
        onSuccess: (data) => {
            console.log(data)
            dispatch(actionFn(data))
        }
    })


    return mutation
}

export default useUpdateProfileData