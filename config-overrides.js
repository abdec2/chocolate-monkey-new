const webpack = require("webpack");

module.exports = function override(config, env) {

    config.resolve.fallback = {
        "stream": require.resolve("stream-browserify"),
        "http": require.resolve("http-browserify"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "buffer": require.resolve("buffer"),
    };

    config.module.rules.unshift({
      test: /\.m?js$/,
      resolve: {
        fullySpecified: false, // disable the behavior
      },
    });

    config.plugins.push(
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
        }),
      );

    return config;
  }
  