const webpack = require('webpack');
const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        //publicPath: __dirname + '/dist'
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
        },
        /*{
          test: /\.(jpg|png|gif|ico)$/,
          use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
              },
          },
          ]
        },*/
        {
          test: /\.(jpg|png|jpeg)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 25000000,
            },
          },
        },
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: __dirname,
      historyApiFallback: true,
      hot: true
    }
};
module.exports = config;
