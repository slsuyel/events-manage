// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index7', // The target path
        permanent: true, // Use `false` for temporary redirects
      },
    ];
  },
};

export default nextConfig;
