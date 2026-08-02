import type { NextConfig } from "next";

const SPA_ORIGIN = process.env.SPA_ORIGIN ?? "https://your-spa-project.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/app", destination: `${SPA_ORIGIN}/app` },
      { source: "/app/:path*", destination: `${SPA_ORIGIN}/app/:path*` },
    ];
  },
};

export default nextConfig;
