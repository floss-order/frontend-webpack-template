const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/public/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './public/js/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })
  ]
}