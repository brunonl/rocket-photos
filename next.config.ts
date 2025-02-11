import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	sassOptions: {
		sourceMap: true,
		silenceDeprecations: [
			'legacy-js-api',
			'mixed-decls',
			'color-functions',
			'global-builtin',
			'import',
		],
	},
	async redirects() {
		return [
			// Basic redirect
			{
				source: '/',
				destination: '/dashboard/users',
				permanent: true,
			},
		]
	},
}

export default nextConfig
