async function fetchBrandsData() {
    const res = await fetch('https://altclan-api-v1.onrender.com/api/brand_users/')
    const data = await res.json()

    if (data.err) {
        const error = data.err
        throw error
    }

    return data

}

export default fetchBrandsData