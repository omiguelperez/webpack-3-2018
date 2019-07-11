const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports ={
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'index.js'),
    contact: path.resolve(__dirname, 'contact.js'),
    prices: path.resolve(__dirname, 'prices.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css')
  ]
}
