export default async function signUp(Username, Email, Password1, Password2) {
    return fetch("http://127.0.0.1:8000/dj-rest-auth/registration/", {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
             credentials: true,
         },
         body: JSON.stringify({ Username, Email, Password1, Password2 })
     })
 }