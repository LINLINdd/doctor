"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _request = require("./request");

function login(username, password) {
  console.log(username, password);
  return (0, _request.requestB)({
    url: '/login',
    params: {
      username: username,
      password: password
    }
  });
} // app/i/ask/healthwiki/feed?items_per_page=10&page_index=2&tag_id=0&category_tag_id=24822