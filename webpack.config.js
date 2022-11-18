var path = require("path");

var src_dir = path.join(__dirname, "/client/src");
var dist_dir = path.join(__dirname, "/client/dist");

module.exports = {
  mode:"development",
  entry: `${src_dir}/index.jsx`,
  output:{
    filename: "bundle.js",
    path: dist_dir
  },
  module: {
    rules: [
     {
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
     }
    ]
  }
};