import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";
import * as devsever from "webpack-dev-server";

interface Configuration extends webpack.Configuration {
  devServer?: devsever.Configuration;
}

const config: Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devtool: "inline-source-map",
  output: {
    // can use [name] in file name to get entry name if
    // entry option is an object
    filename: "static/bundle.js",
    path: path.resolve(__dirname, "dist/"),
    // tells bundled files where to request other bundles from
    publicPath: "/",
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/"),
          to: path.resolve(__dirname, "dist"),
          filter: (resourcePath) => !resourcePath.includes("index.html"),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      title: "Webpack, React and Typescript",
      filename: "index.html",
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve("public"),
    hot: true,
    port: 3000,
    watchContentBase: true,
  },
};

export default config;
