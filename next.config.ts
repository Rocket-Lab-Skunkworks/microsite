import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wiansw.au",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "icon2.cleanpng.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
