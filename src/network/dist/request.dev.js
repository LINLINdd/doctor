"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;
exports.requestB = requestB;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function request(config) {
  var instance = _axios["default"].create({
    baseURL: '/apiA/',
    timeout: 5000
  });

  instance.interceptors.request.use(function (config) {
    config.headers['set-cookie'] = 'DOTCOM_CSRFTOKEN=ed63e966-d909-46e9-863e-a8eb90f73c55;Path=/;Domain=.dxy.com;HTTPOnly';
    return config;
  }, function (err) {
    console.log(err);
  });
  instance.interceptors.response.use(function (res) {
    return res;
  }, function (err) {
    console.log(err);
  });
  return instance(config);
}

function requestB(config) {
  var open = _axios["default"].create({
    baseURL: '/apiB/',
    timeout: 5000,
    method: 'POST'
  });

  open.interceptors.request.use(function (config) {
    return config;
  }, function (err) {
    console.log(err);
  });
  open.interceptors.response.use(function (res) {
    return res;
  }, function (err) {
    console.log(err);
  });
  return open(config);
} // app/i/ask/healthwiki/feed?items_per_page=10&page_index=2&tag_id=0&category_tag_id=24822