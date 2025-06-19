import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aixploria.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
