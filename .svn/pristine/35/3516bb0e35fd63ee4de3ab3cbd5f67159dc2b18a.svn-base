// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
/*打包到绝对路径下*/
if(process.argv.slice(2)[0] && process.argv.slice(2)[0] == "mcm") {
    index_url = "E:\/work-new-svn\/build\/buy\/dist\/index.html"
    build_url = "E:\/work-new-svn\/build\/buy\/dist"
} else {
    index_url = path.resolve(__dirname, "../dist/index.html")
    build_url = path.resolve(__dirname, "../dist")
}
var target = "", rewrite = {};
try{
  var api = process.argv.slice(2)[0];
  if(api == "dh") {
      /*段辉*/
      target = "http://192.168.3.179:8080"
      rewrite = {'^/api' : '/api'}
  } else if(api == "lzf") {
     /*刘志飞*/
      target = 'http://192.168.3.228'
      rewrite = {'^/api' : '/api'}
  } else if(api == "153") {
      /*测试服务器*/
      target = "http://120.24.55.153:8084";
      rewrite = {'^/api' : '/api'}
  } else {
     /*开发服务器*/
      target = 'http://192.168.3.222:8084'
      rewrite = {'^/api' : '/api'}
  }
}catch(e) {
   target = 'http://192.168.3.222:8084'
   rewrite = {'^/api' : '/api'}
}
module.exports = {
  build: {
    env: require('./prod.env'),
    index: index_url,
    assetsRoot: build_url,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    proxyTable: {
    }
  },
  dev: {
    env: require('./dev.env'),
    port: 8011,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/api': {
          target : target,
          changeOrigin: true,
          pathRewrite: rewrite
      }
    },
    cssSourceMap: false
  }

}
