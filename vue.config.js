const glob = require('glob')
const titles = require('./title.js')

var pages = {}
glob.sync('./src/pages/**/app.js').forEach((filePath) => {
    let chunk = filePath.split('./src/pages/')[1].split('/app.js')[0]
    pages[chunk] = {
      entry: filePath,
      template: 'public/index.html',
      title: titles[chunk],
      chunks: ['chunk-vendors', 'chunk-common', chunk]
    }
  })
module.exports = {
    chainWebpack: config => {
    },
    pages,
    lintOnSave: true,
  }