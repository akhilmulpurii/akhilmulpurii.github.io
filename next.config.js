/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  compiler: {
    styledComponents: { ssr: true },
  },
};

module.exports = nextConfig;
