/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/si47int" : "",
  images: {
    unoptimized: true,
  },
  distDir: "out",
};

module.exports = nextConfig;
