import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: false,
  compress: true,
  reactStrictMode: false,
};

module.exports = {
  crossOrigin: 'anonymous',
}

export default nextConfig;