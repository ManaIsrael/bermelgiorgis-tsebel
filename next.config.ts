import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/sitemap.xml", // Match your sitemap file path
        headers: [
          {
            key: "Content-Type",
            value: "application/xml", // Serve as XML
          },
        ],
      },
      {
        source: "/sitemap-0.xml",
        headers: [
          { key: "Content-Type", value: "application/xml" },
        ],
      },
    ];
  },
};

export default nextConfig;
