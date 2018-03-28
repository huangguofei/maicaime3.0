// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var build_url = "", index_url = "";
/*打包到绝对路径下*/
if(process.argv.slice(2)[0] && process.argv.slice(2)[0] == "mcm") {
    index_url = "E:\/work-new-svn\/build\/agent\/dist\/index.html"
    build_url = "E:\/work-new-svn\/build\/agent\/dist"
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
      rewrite = {'^/agent': '/agent'}
  } else if(api == "lzf") {
     /*刘志飞*/
      target = 'http://192.168.3.228'
      rewrite = {'^/agent': '/agent'}
  } else if(api == "153") {
      /*测试服务器*/
      target = "http://120.24.55.153:8083";
      rewrite = {'^/agent': '/agent'}
  } else {
     /*开发服务器*/
      target = 'http://192.168.3.222:8083'
      rewrite = {'^/agent': '/agent'}
  }
}catch(e) {
   target = 'http://192.168.3.222:8083'
   rewrite = {'^/agent': '/agent'}
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
    port: 8013,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/agent': {
          target: target,
          changeOrigin: true,
          pathRewrite: rewrite
      }
    },
    cssSourceMap: false
  }
}
