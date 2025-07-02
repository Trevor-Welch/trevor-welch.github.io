import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export if you use <Image />
  },
  trailingSlash: true, // Required by GitHub Pages to serve index.html in subfolders
};

export default nextConfig;
