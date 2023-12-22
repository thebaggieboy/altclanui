async function fetchProductsData(id, isBrand = false) {
    const userUrl = "https://altclan-api-v1.onrender.com/api/users/" + id + "/"
    const brandUrl = "https://altclan-brands-api.onrender.com/api/brand_users/" + id + "/"


    const res = await fetch(isBrand ? brandUrl : userUrl)
    const data = await res.json()

    if (data.err) {
        Promise.reject(data.err).catch(() => { })
        const error = data.err
        throw error
    }

    return data

}

export default fetchProductsData