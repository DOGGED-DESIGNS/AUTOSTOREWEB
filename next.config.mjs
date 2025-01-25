import path from "path";
const nextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  sassOptions: {
    includePaths: [
      path.join(process.cwd(), "styles"),
      path.join(process.cwd(), "/src/components"),
    ],
  },
  webpack(config, options) {
    // Modify the webpack configuration here
    return config;
  },
};

export default nextConfig;

// "./pages/**/*.{ts,tsx}",
// "./components/**/*.{ts,tsx}",
// "./app/**/*.{ts,tsx}",
// "./src/**/*.{ts,tsx}",
