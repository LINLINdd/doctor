"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProblem = getProblem;

var _request = require("../network/request");

function getProblem() {
  return (0, _request.home)({
    url: '/getGridTwo'
  });
} // http://120.27.146.2:1004/getgridone