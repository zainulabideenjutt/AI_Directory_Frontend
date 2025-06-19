import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.aixploria.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
