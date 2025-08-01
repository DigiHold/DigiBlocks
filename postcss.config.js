
module.exports = (ctx) => ({
	plugins: [
		require('postcss-import'),
		require('postcss-nested'),
		require('autoprefixer'),
		ctx.env === 'production' ? require('cssnano')({
			preset: ['default', {
				discardComments: {
					removeAll: true,
				},
			}],
		}) : false,
	].filter(Boolean),
});