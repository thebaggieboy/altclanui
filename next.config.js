/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"altclan-api-v1.onrender.com",
                port:"",
                pathname:"/media/**"
            }
        ]
    }
}

module.exports = nextConfig