// const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
   
      { test: /\.(js|jsx)$/i, loader: "babel-loader" },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/',
            },
          },
      
    ], }, ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  mode: "production",
  resolve: { extensions: [".ts", ".js"] },
};
