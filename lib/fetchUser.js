
import fetchProfileData from './fetchProfileData'

export async function fetchUser() {
    const res = await fetch("https://altclan-brands-api.onrender.com/dj-rest-auth/user/", {
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json()

    if (res.status >= 200 && res.status <= 209) {
        const profile = await fetchProfileData(data.pk, true)
        return profile
    }

    const err = { ...data }
    throw err
}