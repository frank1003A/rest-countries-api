/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        domains: ["flagcdn.com", "upload.wikimedia.org"],
    }
}

module.exports = nextConfig
