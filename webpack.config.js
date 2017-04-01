const path = require('path')

module.exports = {
	context: __dirname,
	entry: './public/js/4A.js',
	devtool: 'eval',
	output: {
		path: path.join(__dirname, '/public/js'),
		filename: '4.js'
	},
	resolve: {
		extensions: ['.js', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader'
		}]
	}
}