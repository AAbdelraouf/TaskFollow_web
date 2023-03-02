/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'staging-api.taskfollow.net', 'api.taskfollow.net']
  }
};

module.exports = nextConfig;
