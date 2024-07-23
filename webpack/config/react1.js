import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/react/index.tsx",
  mode: "development",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
  },
  devtool:'inline-source-map',
  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env", "@babel/preset-react"],
      //     },
      //   },
      //   exclude: /node_modules/,
      // },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(css|less)$/,
      //   use: ["css-loader", "style-loader", "less-loader"],
      // },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
