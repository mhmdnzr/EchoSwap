/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const prod = process.env.NODE_ENV === 'production'

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/manifest.json$/],
    disable: !prod
});

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compress: true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    // compiler: {
    //     removeConsole: true,
    // },
    // removeConsole: {
    //     exclude: ["error"],
    // },
    images: {
        domains: ['raw.githubusercontent.com'],
        minimumCacheTTL: 60,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/swap',
                permanent: true,
            },
        ]
    },
    webpack: (config, {isServer}) => {
        if (!isServer) {
            config.optimization.splitChunks.cacheGroups = {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            };
        }

        return config;
    }
}

module.exports = withPWA(nextConfig)
