import type { NextConfig } from "next";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1]; // e.g. "mywebsite"
const isPages = process.env.GITHUB_ACTIONS === "true" && !!repo;

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : "",
  // optional if you hit lint blocks:
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
