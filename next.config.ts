import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "flagpedia.net" }],
  },
};

export default nextConfig;
