const path = require('path')

module.exports = {
	context: __dirname,
	entry: './public/js/5A.jsx',
	output: {
		path: path.join(__dirname, '/public/js'),
		filename: '5.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		loaders: [{
			exclude: '/node_modules/',
			test: /\.jsx?$/,
			loader: 'babel-loader'
		}]
	}
}