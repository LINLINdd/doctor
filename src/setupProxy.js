const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        // createProxyMiddleware('/api', {
        //     target: 'https://ask.dxy.com/',
        //     changeOrigin: true,
        //     pathRewrite: { '^/api': '' }
        // }),
        createProxyMiddleware('/apiA', {
            target: 'https://dxy.com/',
            changeOrigin: true,
            pathRewrite: { '^/apiA': '' }
        }),
        // createProxyMiddleware('/api123', {
        //     target: 'http://localhost:3000/',
        //     changeOrigin: true,
        //     pathRewrite: { '^/api123': '' }
        // })
    )
}