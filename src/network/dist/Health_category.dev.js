"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHealth_category = getHealth_category;
exports.getDiseasesList = getDiseasesList;
exports.getScience = getScience;

var _request = require("./request");

function getHealth_category(items_per_page, page_index, tag_id, category_tag_id) {
  return (0, _request.request)({
    url: 'app/i/ask/healthwiki/feed',
    params: {
      items_per_page: items_per_page,
      page_index: page_index,
      tag_id: tag_id,
      category_tag_id: category_tag_id
    }
  });
}

function getDiseasesList(section_group_id, tag_id, page_index, items_per_page) {
  return (0, _request.request)({
    url: 'app/i/ask/question/public/search',
    params: {
      section_group_id: section_group_id,
      tag_id: tag_id,
      page_index: page_index,
      items_per_page: items_per_page
    }
  });
} // app/i/ask/healthwiki/article/hot?page_index=3&items_per_page=20&type=0


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