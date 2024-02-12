/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: ['./src/assets/styles']
	},
	productionBrowserSourceMaps: true,

	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
	},
	images: {
		domains: [
			'loremflickr.com',
			'avatars.githubusercontent.com',
			'cdn.comfy.ua',
			'hips.hearstapps.com',
			'hips.hearstapps.com',
			'cloudflare-ipfs.com',
			'cloudflare-ipfs.com',
			'content2.rozetka.com.ua'
		]
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `http://localhost:4200/uploads/:path*`
			}
		]
	}
}

module.exports = nextConfig
