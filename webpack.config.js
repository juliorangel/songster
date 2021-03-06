const webpack = require('webpack')

module.exports = {
	entry: './build/index.js',
	output: {
		path: __dirname + 'public',
		filename: 'bundle.js'
	},
	devServer: {
		port: 8080,
		contentBase: './public'
	}
}