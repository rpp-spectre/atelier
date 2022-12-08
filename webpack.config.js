var path = require("path");
var webpack = require("webpack");
var src_dir = path.join(__dirname, "/client/src");
var dist_dir = path.join(__dirname, "/client/dist");
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })

module.exports = {
  mode:"development",
  entry: `${src_dir}/index.jsx`,
  output:{
    filename: "bundle.js",
    path: dist_dir
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
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
     }
    ]
  }
};