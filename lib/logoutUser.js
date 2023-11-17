export default async function logoutUser() {
    const res = await fetch("https://altclan-api-v1.onrender.com/dj-rest-auth/logout/", {
        credentials: "include",
        method: "POST"
    })
    if (!res.ok) {
        const err = await res.json()
        throw new Error("error logging out:" + err.error.message)
    }

    const data = await res.json()
    return data.message
}