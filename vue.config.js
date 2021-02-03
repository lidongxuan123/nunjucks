var path = require("path")
console.log(path.join(__dirname, 'server/views'))
module.exports = {
  configureWebpack: {
      resolve: {
          alias: {
              'src': path.join(__dirname, 'src'),
              "public": path.join(__dirname, 'server/views'),
              "server": path.join(__dirname, 'server'),
          }
      }
    // plugins: [
    //   new MyAwesomeWebpackPlugin()
    // ]
  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: path.join(__dirname, 'server/views/index.html'),
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '首页',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  }
}