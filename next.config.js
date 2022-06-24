/** @type {import('next').NextConfig} */
module.exports = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	reactStrictMode: true,
	env: {
		ENDPOINT: process.env.ENDPOINT,
	},
};
