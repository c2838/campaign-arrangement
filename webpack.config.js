const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main-bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
     new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
}