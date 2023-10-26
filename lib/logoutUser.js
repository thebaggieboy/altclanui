export default async function logoutUser() {
    const res = await fetch("/api/logout", {
        credentials: "include"
    })
    if (!res.ok) {
        const err = await res.json()
        throw new Error("error logging out:" + err.error.message)
    }

    const data = await res.json()
    return data.message
}