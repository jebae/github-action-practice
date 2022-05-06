/* eslint @typescript-eslint/no-var-requires: "off" */
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
});
