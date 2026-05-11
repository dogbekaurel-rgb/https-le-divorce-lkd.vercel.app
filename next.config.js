/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    cache: 'maximized',
  },

  // Video and media support
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/media/',
            outputPath: `${isServer ? '../' : ''}static/media/`,
            name: '[name]-[hash].[ext]',
            esModule: false,
          },
        },
      ],
    });
    return config;
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Le Divorce – LKD',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://le-divorce-lkd.vercel.app',
  },

  // Performance
  swcMinify: true,
  productionBrowserSourceMaps: false,
  compress: true,

  // Headers for performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },

  // Redirects (optional)
  async redirects() {
    return [];
  },

  // Rewrites (optional)
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
