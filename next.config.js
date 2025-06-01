/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'recordr-bucket.s3.eu-north-1.amazonaws.com',
			},
			{
				protocol: 'https',
				hostname: 'startupfa.me',
			},
			{
				protocol: 'https',
				hostname: 'feedbackz.co',
			},
		],
	},
}

export default nextConfig
