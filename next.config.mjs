import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = __dirname;
    return config;
  },
  env: {
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
    SELLER_ID: process.env.SELLER_ID,
  },
};

export default nextConfig;
