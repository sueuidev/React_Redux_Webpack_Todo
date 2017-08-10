var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map', //keep track the error. show original file instead of bundle.js
  entry: [
    'webpack-hot-middleware/client',
    './client/client.js'
  ],
  output: {
    path: require("path").resolve("./dist"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { //same as setup .babelrc file. just different way
          presets: ['react', 'es2015', 'react-hmre']
          //babel-preset-react: convert jsx to js
         //babel-preset-es2015: covert ES6 to ES5
        }
      }
    ]
  }
}
