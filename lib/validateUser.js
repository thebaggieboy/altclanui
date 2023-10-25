export async function validateUser() {
    const res = await fetch("/api/validateUser", {
        credentials: "include"
    })
    if (!res.ok) {
        const err = await res.json()
        throw new Error(err.message)
    }

    const data = await res.json()
    return data
}