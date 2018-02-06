var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './entry.js',
  output: { // dist以下にbundle.jsを出力
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  plugins: [
    new UglifyJsPlugin({uglifyOptions: {ecma: 6}})
  ],
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }]
    }]
  },
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    port: 8080,
  },
  devtool: 'source-map',
};