const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: ["/node_modules/"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Rust Analyzer",
      template: "./src/index.html",
    }),
  ],
};
