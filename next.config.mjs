/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',

            },
            {
                protocol: 'https',
                hostname: 'placehold.co',

            },
            {
                protocol: 'https',
                hostname: 'a0.muscache.com',

            },
            {
                protocol: 'https',
                hostname: 'example.com',

            },
        ],
    },
};

export default nextConfig;