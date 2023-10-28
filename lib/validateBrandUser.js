export async function validateBrandUser() {
    const res = await fetch("/api/validateBrandUser", {
        credentials: "include"
    })
    if (!res.ok) {
        const err = await res.json()
        throw new Error(err.message)
    }

    const data = await res.json()
    return data
}