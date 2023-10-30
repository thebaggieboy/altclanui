export default async function signUp(email, password) {

    const res = await fetch("/api/signup/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            credentials: true,
        },
        body: JSON.stringify({ email, password })
    })

    console.log(res.status)

    const data = await res.json()

    return data

}