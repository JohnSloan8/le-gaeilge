/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ltltnbyyrnlaudowmgzv.supabase.co",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
