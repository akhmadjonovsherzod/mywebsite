import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // No basePath / assetPrefix on a custom root domain
  // If you previously used this to bypass lint blocking, keep it:
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
