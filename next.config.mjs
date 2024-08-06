/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'tmpfiles.org',
          port: '',
        },
        {
            protocol: 'https',
            hostname: 'fakeimg.pl',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
          },
      ],
    },
  }
  ;

export default nextConfig;
