import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compress: true,
  poweredByHeader: false,
  // Optional: Add trailingSlash if your hosting provider requires it for static exports
  // trailingSlash: true,
  experimental: {
    // Inline critical CSS in the HTML to remove render-blocking stylesheet chains (LCP)
    inlineCss: true,
  },
  // Drop Next's built-in legacy polyfills; all targeted browsers (see browserslist) support these natively.
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./scripts/empty-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./scripts/empty-polyfill.js",
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "next/dist/build/polyfills/polyfill-module": path.resolve(__dirname, "scripts/empty-polyfill.js"),
    };
    return config;
  },
};

export default nextConfig;

