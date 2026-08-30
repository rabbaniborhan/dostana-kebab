import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "restaumatic-production.imgix.net",
      },
    ],
  },
};

export default nextConfig;
