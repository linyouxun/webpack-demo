const path = require("path");
// const CopyPlugin = require("./plugin/CopyPlugin");

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
    index: {
      import: path.resolve(__dirname, "./src/index-b.js"),
      runtime: "solid-runtime",
    },
  },
  devtool: false,
  // target: "web",
  // plugins: [],
  optimization: {
    usedExports: true,
  },
  // plugins: [new CopyPlugin({ from: "./src", to: "./dist" })],
};
