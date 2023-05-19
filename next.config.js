/** @type {import('next').NextConfig} */

const nextConfig = {};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placehold.co", "ibb.co"],
  },
};
