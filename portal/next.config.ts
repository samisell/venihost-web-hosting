import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "app.venihost.com.ng" },
      { protocol: "https", hostname: "www.gravatar.com" },
    ],
  },
  // Allow server-side env vars to be accessed in API routes
  serverExternalPackages: ["pino"],
};

export default nextConfig;
