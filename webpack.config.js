const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const srcPath = path.resolve(__dirname, "./src");
const distPath = path.resolve(__dirname, "./dist");

module.exports = (env) => ({
  entry: path.resolve(srcPath, "App.jsx"),
  output: {
    path: distPath,
    filename: "js/[name].js",
  },
  mode: env.mode,
  target: "web",
  devtool: env.mode === "production" ? "eval-source-map" : false,
  resolve: {
    alias: {
      components: path.resolve(srcPath, "js/components"),
      pages: path.resolve(srcPath, "js/pages"),
      landmarks: path.resolve(srcPath, "js/landmarks"),
      scss: path.resolve(srcPath, "scss/"),
      assets: path.resolve(srcPath, "assets/"),
      variables: path.resolve(srcPath, "scss/variables")
    },
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, "./index.html"),
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[folder]/[name].[ext]",
              outputPath: "assets/",
              publicPath: "/assets",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    open: true,
    writeToDisk: true,
    contentBase: distPath,
    historyApiFallback: true,
    port: "8080",
  },
});
