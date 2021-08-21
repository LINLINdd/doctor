"use strict";

var _require = require('http-proxy-middleware'),
    createProxyMiddleware = _require.createProxyMiddleware;

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'https://ask.dxy.com/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }), createProxyMiddleware('/dxy', {
    target: 'https://dxy.com/',
    changeOrigin: true,
    pathRewrite: {
      '^/dxy': ''
    }
  }), createProxyMiddleware('/shuju', {
    target: 'http://localhost:3000/',
    changeOrigin: true,
    pathRewrite: {
      '^/shuju': ''
    }
  }), // http://120.27.146.2:1004/getGridTwo
  createProxyMiddleware('/pbm', {
    target: 'http://120.27.146.2:1004/',
    changeOrigin: true,
    pathRewrite: {
      '^/pbm': ''
    }
  }));
};