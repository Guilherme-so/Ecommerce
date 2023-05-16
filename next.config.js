/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // add the following snippet
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
