const webpack = require('webpack');
const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader'}, {
          test: /\.s?css?/,
          use: [
              'style-loader',
              'css-loader',
              'sass-loader'
          ]
        }
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: __dirname,
      historyApiFallback: true
    }
};
module.exports = config;
