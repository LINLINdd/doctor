"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProblem = getProblem;
exports.getGridone = getGridone;

var _request = require("../network/request");

function getProblem() {
  return (0, _request.home)({
    url: '/getGridTwo'
  });
} // http://120.27.146.2:1004/getgridone


function getGridone() {
  return (0, _request.home)({
    url: '/getGridone'
  });
} //