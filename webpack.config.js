var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.htm', //指定html模板目录路径
  filename: 'index.html', //新建文件名
  inject: 'body' //<script>[output的filename(index_bundle.js)]</script>查到body中,另可插head
});

module.exports = {
  entry: [
    './app/my.jsx' //App.js是主入口jsx
  ],
  output: { //指定输出目录和输出文件名index_bundle.js
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [ //正则：以jsx结尾；排除node_modules目录；babel加载器
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};