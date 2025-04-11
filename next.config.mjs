/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**", // 🔥 allows all HTTPS hosts
			},
		],
	},
};

export default nextConfig;
