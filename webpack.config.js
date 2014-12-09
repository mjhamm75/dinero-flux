module.exports = {
	entry: './app/js/router.js',
	output: {
		filename: 'build/bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'jsx-loader' }
		]
	}
};