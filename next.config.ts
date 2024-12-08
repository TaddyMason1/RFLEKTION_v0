// next.config.ts

import { NextConfig } from 'next';

// Define the Next.js configuration object
const nextConfig: NextConfig = {
  // This can be used to expose environment variables globally
  env: {
    REOWN_ID: process.env.REOWN_ID,  // Server-side environment variable
    NEXT_PUBLIC_REOWN_ID: process.env.NEXT_PUBLIC_REOWN_ID,  // Exposed to the client-side
  },
  // Other Next.js configurations (e.g., optimization, webpack, etc.)
  reactStrictMode: true,
};

export default nextConfig;
