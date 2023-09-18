/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
module.exports = {
  webpack: (config) => {
    // Add or customize Webpack configuration here
    // For example, you can use 'alias' to replace specific modules
    config.resolve.alias = {
      ...config.resolve.alias,
      fs: false, // Disable 'fs' module
      tls: false, // Disable 'tls' module
      net: false, // Disable 'net' module
    };
    return config;
  },
};
