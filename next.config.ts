// Convert to .js if there are issues with TypeScript config
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/si47int" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
