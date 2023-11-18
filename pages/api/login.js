

export default async function handler(req, res) {
    const externalApiUrl = "https://altclan-api-v1.onrender.com/dj-rest-auth/login/";

    let { username, email, password } = req.body;
    await fetch(externalApiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials:true,
        body: JSON.stringify({ username: email, email, password }),
    }).then(async (response) => {
            if (response.status >= 200 && response.status <= 209) {
                const { user, access } = await response.json()
                console.log(response.headers)
                const token = access
                console.log(access)
                const expires = new Date();
                expires.setTime(expires.getTime() + 2 * 24 * 60 * 60 * 1000);
                const cookie = `token=${token};expires=${expires.toUTCString()};path=/;httpOnly;`;
                res.setHeader("Set-Cookie", cookie);
                const userData = { ...user, id: user.pk }
                delete user["pk"]
                res.status(response.status).json(userData);
                return
            }
            const data = await response.json()
            res.status(response.status).json({ err: data });
        })
        .catch((err) => {
            res.status(500).json({ err: err.message });
        })


}
