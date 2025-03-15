/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Forces static export mode
    trailingSlash: true, // Fixes path issues in Chrome extensions
    experimental: {
        appDir: true, // Keep App Router enabled
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false }; // Prevents build issues
        return config;
    },
};

export default nextConfig;