/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ["image/webp", "image/avif"],
    domains: ["wafilife-media.wafilife.com"],
  },
};

module.exports = nextConfig;
