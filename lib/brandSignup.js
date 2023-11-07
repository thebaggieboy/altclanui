export default async function signUp(username, email, password1, password2) {
    return fetch("/api/brands/signup/", {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
             credentials: true,
         },
         body: JSON.stringify({username, email, password1, password2 })
     })
 }