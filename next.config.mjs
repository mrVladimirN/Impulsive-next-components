/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['github.com', 'lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com'
      },
      {
        protocol: 'https',
        hostname: 'i5.walmartimages.com'
      }
    ]
  },
  experimental: {},
  output: 'standalone'
};

export default nextConfig;
