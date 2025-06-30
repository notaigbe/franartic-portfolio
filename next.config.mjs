/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['via.placeholder.com'],
  },
  output: "export",
  // optionally:
  trailingSlash: true, // recommended for static hosting
};

export default nextConfig;
