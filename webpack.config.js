var path = require("path");
var webpack = require("webpack");
var src_dir = path.join(__dirname, "/client/src");
var dist_dir = path.join(__dirname, "/client/dist");
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode:"development",
  entry: `${src_dir}/index.jsx`,
  output:{
    filename: "bundle.js",
    path: dist_dir,
    publicPath: "/"
  },
  // devServer: {
  //   port: 3000,
  //   hot: true,
  //   historyApiFallback: true
  // },
  //added for routing, commented out for now
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
    new CompressionPlugin(),
  ].filter(Boolean),
  module: {
    rules: [
     {
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
     },
     {
      test: /\.(css|scss)$/,
      use: ["style-loader", "css-loader"],
     },
     {
      test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
      use: ["file-loader"]
     }
    ]
  }
};