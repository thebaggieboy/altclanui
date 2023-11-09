

export default async function handler(req, res) {
    const externalApiUrl = "https://altclan-api-v1.onrender.com/dj-rest-auth/login/";
    //const externalApiUrl = "https://altclan-api-v1.onrender.com/api/brand_users/";

    let { username, email, password } = req.body;
    await fetch(externalApiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, email, password }),
    })
        .then(async (response) => {
            if (response.status >= 200 && response.status <= 209) {
                
                res.status(response.status).json({ message: "user created" });
                return
            }
            const data = await response.json()
            res.status(response.status).json({ err: data });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        })


}
