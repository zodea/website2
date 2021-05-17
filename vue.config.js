const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = process.env.port || 3001;

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // proxy: ""
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/styles/config.scss";',
      },
    },
  },
};
