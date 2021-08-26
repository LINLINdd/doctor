"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScience = getScience;
exports.getSearchContent = getSearchContent;
exports.getdocter = getdocter;
exports.getMedicine = getMedicine;


var _request = require("./request");

function getScience(page_index, items_per_page, type) {
  return (0, _request.request)({
    url: 'app/i/ask/healthwiki/article/hot',
    params: {
      page_index: page_index,
      items_per_page: items_per_page,
      type: type
    }
  });
} 

// https://dxy.com/app/i/search/index/v2?q=s&page_index=1&items_per_page=20
function getSearchContent(q, page_index, items_per_pagee) {
  return (0, _request.request)({
    url: 'app/i/search/index/v2',
    params: {
      q: q,
      page_index: page_index,
      items_per_pagee: items_per_pagee
    }
  });
} 
// https://dxy.com/app/i/ask/drug/detail/search?keyword=A&page_index=1&items_per_page=20
function getMedicine(keyword, page_index, items_per_pagee) {
  return (0, _request.request)({
    url: 'app/i/ask/drug/detail/search',
    params: {
      keyword: keyword,
      page_index: page_index,
      items_per_pagee: items_per_pagee
    }
  });
} 




// 120.27.146.2:1004/getdocter
function getdocter() {
  return (0, _request.home)({
    url: '/getdocter'
  });
}