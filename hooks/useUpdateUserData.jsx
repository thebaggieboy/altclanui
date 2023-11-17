import { useMutation } from "@tanstack/react-query"
import { useDispatch, useSelector } from "react-redux"
import { selectUser, setUser } from "../features/user/userSlice"


const useUpdateUserData = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const mutation = useMutation({
        mutationFn: async (vars) => {
            console.log(vars.newData, vars.id)
            try {
                const res = await fetch(`https://altclan-api-v1.onrender.com/api/users/${vars.id}/`, {
                    method: "PATCH",
                    body: JSON.stringify({ ...vars.newData }),
                    headers: {
                        "Content-Type": "application/json"
                    }
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
            dispatch(setUser({ ...user, ...data }))
        }
    })


    return mutation
}

export default useUpdateUserData