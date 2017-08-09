module.exports = {
  devtool: 'inline-source-map', //keep track the error. show original file instead of bundle.js
  entry: './client/client.js',
  output: {
    // path: './dist',
    path: __dirname + '/dist/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { //same as setup .babelrc file. just different way
          presets: ['react', 'es2015']
          //babel-preset-react: convert jsx to js
          //babel-preset-es2015: covert ES6 to ES5
        }
      }
    ]
  }
};

/*
module.exports = {
    entry: "./src/js/main.js",
    output: {
        path:__dirname+ '/dist/',
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

};
*/
