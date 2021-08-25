const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://ask.dxy.com/',
            changeOrigin: true,
            pathRewrite: { '^/api': '' }
        }),
        createProxyMiddleware('/dxy', {
            target: 'https://dxy.com/',
            changeOrigin: true,
            pathRewrite: { '^/dxy': '' }
        }),
        createProxyMiddleware('/shuju', {
            target: 'http://localhost:3000/',
            changeOrigin: true,
            pathRewrite: { '^/shuju': '' }
        }),
        createProxyMiddleware('/positioning', {
            target: 'https://assets.dxycdn.com/',
            changeOrigin: true,
            pathRewrite: { '^/positioning': '' }
        })

    )
}
// https://dxy.com/app/i/recommend/hospital/combination/page?page_index=1
// https://assets.dxycdn.com/gitrepo/ask_v2_develop/misc/location_hospital.json?t=2