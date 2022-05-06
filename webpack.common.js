/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require("path");
const DotenvPlugin = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new DotenvPlugin(),
  ],
};
