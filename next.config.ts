import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The product was renamed Aira -> Anril; keep old links working (308).
        source: "/products/aira",
        destination: "/products/anril",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
