/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig
