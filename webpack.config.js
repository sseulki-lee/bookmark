const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SRC_DIR = `${__dirname}/src`;
const BUNDLES_DIR = `${__dirname}/bundles`;

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
  },
  entry: `${SRC_DIR}/index.tsx`,
  output: {
    path: BUNDLES_DIR,
    publicPath: "./",
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: `${SRC_DIR}/index.html`,
      filename: `index.html`,
    }),
  ],
};
