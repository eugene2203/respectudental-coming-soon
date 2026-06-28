import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === "production" && { output: 'standalone'}),
  images: {
    formats: ['image/avif', 'image/webp'], // современные форматы, avif ~30% меньше webp
    minimumCacheTTL: 86400,                // кеш изображений 24 часа
  },
  compiler: {
    // убирает console.log в продакшене
    removeConsole: process.env.NODE_ENV === 'production',
  },
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForBuild: true,
    optimizePackageImports: ['sonner'],
    serverActions: {
      bodySizeLimit: '2mb',
    },
    staleTimes: {
      dynamic: 0,
    },
    inlineCss: true,        // встраивает критический CSS прямо в HTML
    cssChunking: 'strict',  // более агрессивное разделение CSS
  },
};

export default nextConfig;
