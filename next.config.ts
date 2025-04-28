/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Critical for static site generation
  basePath: process.env.NODE_ENV === "production" ? "/si47int" : "",
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
