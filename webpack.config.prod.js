const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { default: ImageminWebpackPlugin } = require("imagemin-webpack-plugin");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", {loader: "postcss-loader"}, "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "img",
            },
          },
          {
            loader: "img-loader",
            options: {
              plugins: [
                require("imagemin-gifsicle")({
                  interlaced: false,
                }),
                require("imagemin-mozjpeg")({
                  progressive: true,
                  arithmetic: false,
                }),
                require("imagemin-pngquant")({
                  floyd: 0.5,
                  speed: 2,
                }),
                require("imagemin-svgo")({
                  plugins: [{ removeTitle: true }, { convertPathData: false }],
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
      new TerserPlugin({
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
      new ImageminWebpackPlugin({
        pngquant: {
          quality: "75",
        },
      }),
    ],
  },
});
