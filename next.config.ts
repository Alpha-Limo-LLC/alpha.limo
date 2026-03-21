import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  cacheComponents: false,
  compress: true,
  reactStrictMode: false,
  images: {
    localPatterns: [
      {
        pathname: '/assets/images/**',
        search: '',
      },
    ],
  },
}

module.exports = {
  allowedDevOrigins: ['127.0.0.1'],
  crossOrigin: 'anonymous',
  images: {
    qualities: [100, 75, 50, 25],
  },
}

export default nextConfig
