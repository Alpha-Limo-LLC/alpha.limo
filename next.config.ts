import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: false,
  compress: true,
  reactStrictMode: false,
  images: {
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '',
      },
    ],
  },
};

module.exports = {
  crossOrigin: 'anonymous',
}

export default nextConfig;