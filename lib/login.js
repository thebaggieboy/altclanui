export default async function login(username, email, password) {
    const res = await fetch("/api/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            credentials: true,
        },
        body: JSON.stringify({ username, email, password })
    })

    const data = await res.json()
    

    if (data.err) {
        Promise.reject(data.err).catch(() => { })
        const error = { err: data.err }
        throw error
    }

    return data

}