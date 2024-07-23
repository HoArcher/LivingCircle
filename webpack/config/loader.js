import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/loader/test.md",
  mode:'development',
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: {
          loader: "./loader/md-loader.js",
        },
      },
    ],
  },
  plugins:[new HtmlWebpackPlugin({template:'./src/index.html'})]
};
