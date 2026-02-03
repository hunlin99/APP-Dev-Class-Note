import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 必填：啟動靜態導出
  basePath: '/Class-Note',
  assetPrefix: '/Class-Note/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
