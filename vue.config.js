const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('sharp')
      .loader('sharp-loader')
      .options({
        jpeg: { quality: 80 },
        png: { quality: 80 }
      })
  }
}