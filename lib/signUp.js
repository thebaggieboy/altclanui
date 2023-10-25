export default async function signUp(email, password) {
   return fetch("/api/signup/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            credentials: true,
        },
        body: JSON.stringify({ email, password })
    })
}