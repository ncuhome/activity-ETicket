const proxy = require('http-proxy-middleware')

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api',{
          target:"https://qrcode-eticket.vercel.app",
          changeOrigin:true,
          pathRewrite:{
          "^/api":""
          }
      })
  )
}
