/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: false, // ถ้าเปิด App Router ต้องปิด serverActions ก่อน
  },
};

module.exports = nextConfig;
