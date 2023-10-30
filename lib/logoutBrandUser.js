export default async function logoutBrandUser() {
    const res = await fetch("/api/brands/logout", {
        credentials: "include"
    })
    if (!res.ok) {
        const err = await res.json()
        throw new Error("error logging out:" + err.error.message)
    }

    const data = await res.json()
    return data.message
}