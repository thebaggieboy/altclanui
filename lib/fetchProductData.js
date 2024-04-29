async function fetchProductData(id) {
    const res = await fetch(`https://altclan-api-v1.onrender.com/api/merchandises/${id}`)
    const data = await res.json()

    if (data.err) {
        const error = data.err
        throw error
    }

    return data

}

export default fetchProductData