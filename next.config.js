/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      }
    ],
    formats: ['image/avif', 'image/webp'],
  },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true
}

module.exports = config 