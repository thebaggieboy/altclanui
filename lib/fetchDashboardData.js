async function fetchDashboardData(id) {
    const res = await fetch(`https://altclan-brands-api.onrender.com/api/brand_dashboard/${id}`)
    const data = await res.json()

    if (data.err) {
        const error = data.err
        throw error
    }

    return data

}

export default fetchDashboardData