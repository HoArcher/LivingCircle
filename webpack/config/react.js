// import path from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";

// export default {
//   entry: './src/react/index.tsx',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve("dist"),
//   },
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/react/index.html',
//     }),
//   ],
//   devServer: {
//     contentBase: path.resolve("dist"),
//     compress: true,
//     port: 9000,
//   },
// };

// react typescript项目
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/react/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: path.resolve("dist"),
    compress: true,
    port: 9000,
  },
};
