export default async function login(username, email, password) {
    return fetch("/api/login/", {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
             credentials: true,
         },
         body: JSON.stringify({username, email, password })
     })
 }