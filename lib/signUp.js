export default async function signUp(username, email, password1, password2) {
    const res = await fetch("/api/signup/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            credentials: true,
        },
        body: JSON.stringify({ username, email, password1, password2 })
    })
    const data = await res.json()
    if (data.err) {
        //rejects this promise but get's handled by calling function not here
        console.log(data.err)
        Promise.reject(data.err).catch(() => { })
        const error = { err: data.err }
        throw error
    }
    return data

}