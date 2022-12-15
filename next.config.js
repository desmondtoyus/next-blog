/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true,
  images: {
    domains: [
      'cdn.builder.io',
      'cdn.shopify.com',
      'seal-alaskaoregonwesternwashington.bbb.org',
    ],
  },
};

module.exports = nextConfig;
