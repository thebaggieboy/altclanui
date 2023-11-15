async function fetchUserData(id) {
    const res = await fetch("https://altclan-api-v1.onrender.com/api/users/" + id)
    const data = await res.json()

    if (data.err) {
        Promise.reject(data.err).catch(() => { })
        const error = data.err
        throw error
    }

    return data

}

export default fetchUserData