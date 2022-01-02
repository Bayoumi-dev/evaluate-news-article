const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    port: 3000,
  },
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require.resolve("sass"),
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/views/index.html",
      favicon: "./src/client/views/favicon.ico",
      filename: "./index.html",
      inject: "body",
    }),
  ],
};
