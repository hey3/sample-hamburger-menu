const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const mode = process.env.BUILD_MODE || 'development'

module.exports = {
  mode,
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    open: true,
  },
  devtool: mode === 'production' ? false : 'inline-source-map',
  entry: {
    main: {
      import: ['./src/main.tsx'],
    },
  },
  experiments: {},
  // FIXME: assetModulesを使うように修正
  // experiments: {
  //   asset: true,
  // },
  externals: {},
  externalsPresets: {},
  infrastructureLogging: {},
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // FIXME: assetModulesを使うように修正
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   type: 'asset',
      // },
    ],
  },
  node: {},
  optimization: {},
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js',
    assetModuleFilename: 'images/[hash][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@themes': path.resolve(__dirname, './src/themes'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  resolveLoader: {},
  snapshot: {},
  stats: {},
  target: 'web',
  watchOptions: {},
}
