import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { USER_TYPES, selectUser } from '../features/user/userSlice'

const useAddMerchandise = (url, successCallback, userType) => {
    const brand = useSelector(selectUser)
    const isBrand = userType === USER_TYPES.brand
    const mutation = useMutation({
        mutationFn: async ({brand_name, merchandise_name, merchandise_type, merchandise_category, labels, merchandise_description, merchandise_details, display_image, size_type, available_sizes, price }) => {
          
                const res = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({brand_name:brand.brand_name, merchandise_name, merchandise_type, merchandise_category, labels, merchandise_description, merchandise_details, display_image, size_type, available_sizes, price }),
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

            } ,
            onSuccess: (data) => {
                successCallback(user)
                router.push(`/profile/${user.id}`)
                console.log(data)
            }
        
       
    })

    return mutation
}

export default useAddMerchandise