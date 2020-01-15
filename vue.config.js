
const path = require('path');

const glob = require('glob')
const titles = require('./title.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

var pages = {}
glob.sync('./src/pages/**/app.js').forEach((filePath) => {
  let chunk = filePath.split('./src/pages/')[1].split('/app.js')[0]
  pages[chunk] = {
    entry: filePath,
    template: 'public/'+chunk+'.html',
    title: titles[chunk],
    chunks: ['chunk-vendors', 'chunk-common', chunk]
  }
})
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('~', resolve('src'))
      .set('assets', resolve('src/assets'))
  },
  pages,
  lintOnSave: true,
  assetsDir: 'static',
  publicPath: './',
  devServer: {
    proxy: {
      '/reg': {
        // target: 'http://10.10.10.71:9095/reg',
        target: 'https://m.ketianyun.com/reg',
        changeOrigin: true,
        pathRewrite: {
          '^/reg': ''
        }
      }
    }
  }
}