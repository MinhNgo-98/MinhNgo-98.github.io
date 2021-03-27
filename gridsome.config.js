// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'Minh Huan Ngo | Portfolio',
	siteDescription: 'Mein Web Developer Portfolio',
	siteUrl: 'https://minhngo-98.github.io/',
	pathPrefix: '/MinhNgo-98.github.io',
	plugins: [
		{
			use: 'gridsome-plugin-tailwindcss',
			options: {
				tailwindConfig: './tailwind.config.js',
				presetEnvConfig: {},
				shouldImport: false,
				shouldTimeTravel: false
			}
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'blog/**/*.md',
				typeName: 'Post',
				refs: {
					tags: {
						typeName: 'Tag',
						create: true
					}
				}
			}
		},
		{
			use: '@gridsome/plugin-sitemap',
			options: {
				cacheTime: 600000 // default
			}
		}
	]
};
