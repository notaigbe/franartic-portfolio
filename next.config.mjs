/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "via.placeholder.com",
      },
    ],
    unoptimized: true, // Use this if you want to disable Next.js image optimization
  },
  // output: "export",
  // optionally:
  trailingSlash: true, // recommended for static hosting
};

export default nextConfig;
