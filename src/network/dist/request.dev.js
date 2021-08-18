"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function request(config) {
  var instance = _axios["default"].create({
    baseURL: '/apiA/',
    timeout: 5000,
    withCredentials: true
  }); // axios.defaults.withCredentials = true


  instance.interceptors.request.use(function (config) {
    config.headers['Cookie'] = '_ga=GA1.2.1533901395.1629096106';
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
} // app/i/ask/healthwiki/feed?items_per_page=10&page_index=2&tag_id=0&category_tag_id=24822