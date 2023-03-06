/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md'],
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'ui-avatars.com', 'firebasestorage.googleapis.com'],
  }
}

module.exports = nextConfig
