const path = require('path')

module.exports = {
  context: __dirname,
  entry: './public/js/14.js',
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
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
    rules: [{
      enforce: 'pre',
      test: /\.js?$/,
      loader: 'eslint-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.json?$/,
      loader: 'json-loader'
    }, {
      exclude: '/node_modules/',
      test: /\.js?$/,
      loader: 'babel-loader'
    }, {
      test: /\.css?$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: false
          }
        }
      ]
    }]
  }
}
