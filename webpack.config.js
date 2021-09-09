const path = require("path");
const RevertTracePlugin = require("./plugin/RevertTracePlugin");

module.exports = {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },

  // mode: "production",
  // output: {
  //   filename: "[name].js",
  //   path: path.join(__dirname, "./dist2"),
  // },

  entry: {
    a: path.resolve(__dirname, "./src/index-a.js"),
    // b: path.resolve(__dirname, "./src/index-b.js"),
  },
  devtool: false,
  // target: "web",
  // plugins: [],
  optimization: {
    usedExports: true,
  },
  plugins: [new RevertTracePlugin()],
};
