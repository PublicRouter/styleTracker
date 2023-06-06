/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"], // 추가
    },
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
    },
}

module.exports = nextConfig
