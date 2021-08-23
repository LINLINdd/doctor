"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProblem = getProblem;
exports.getGridone = getGridone;
exports.getDiseasesName = getDiseasesName;

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
} // http://120.27.146.2:1004/getDiseasesName


function getDiseasesName() {
  return (0, _request.home)({
    url: 'getDiseasesName'
  });
}