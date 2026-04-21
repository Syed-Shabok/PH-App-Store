/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "**",
      },

      // This Allows All Websites
      // {
      //   protocol: "https",
      //   hostname: "**",
      // },
    ],
  },
};

export default nextConfig;
