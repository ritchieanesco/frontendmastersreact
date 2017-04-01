const path = require('path')

module.exports = {
  context: __dirname,
  entry: './public/js/6.js',
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'bundle.js'
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
