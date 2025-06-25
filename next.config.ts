import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',            // Enables static export
  trailingSlash: true,         // Ensures GitHub Pages can load subpages
  images: {
    unoptimized: true,         // Required if using next/image
  },
  basePath: '',                // No basePath for root domain
};

export default nextConfig;
