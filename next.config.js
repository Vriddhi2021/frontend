/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

rewrites: async () => [{
  source: "/public/paymentHTML.html",
  destination: "/pages/api/paymentfile.js",
}]

module.exports = nextConfig
