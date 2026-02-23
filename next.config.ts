import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: false,
  compress: true,
  reactStrictMode: false,
  images: {
    qualities: [75, 100],
    localPatterns: [
      {
        pathname: '/assets/images/**',
        search: '',
      },
    ],
  },
};

module.exports = {
  crossOrigin: 'anonymous',
}

export default nextConfig;