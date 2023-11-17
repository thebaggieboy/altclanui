export async function fetchUser() {
    const res = await fetch("https://altclan-api-v1.onrender.com/dj-rest-auth/user/", {
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json()

    if (res.status >= 200 && res.status <= 209) {
        return data
    }

    const err = { ...data }
    throw err
}