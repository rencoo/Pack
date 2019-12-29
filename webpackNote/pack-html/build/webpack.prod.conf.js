const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: ['./src/main.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
    // publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // chunks: ['bundle'],
      template: './index.html',
      filename: 'index.html', // dist下的index.html
      inject: true
    })
  ]
}
