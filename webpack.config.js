const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const env = process.env.BUILD_MODE

module.exports = {
  mode: env || 'development',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@themes': path.resolve(__dirname, './src/themes'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devtool: env === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'lib'),
    historyApiFallback: true,
  },
}
