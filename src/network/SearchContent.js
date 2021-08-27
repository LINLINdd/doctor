import { request,home } from './request'



// app/i/ask/healthwiki/article/hot?page_index=3&items_per_page=20&type=0
export function getScience(
    page_index,
    items_per_page,
    type,
) {
    return request({
        url: 'app/i/ask/healthwiki/article/hot',
        params: {
            page_index,
            items_per_page,
            type,
        }
    })
}

// https://dxy.com/app/i/search/index/v2?q=s&page_index=1&items_per_page=20
export function getSearchContent(
  q,
  page_index,
  items_per_pagee,
) {
    return request({
        url: 'app/i/search/index/v2',
        params: {
            q,
            page_index,
            items_per_pagee,
        }
    })
}

// 120.27.146.2:1004/getdocter
export function getdocter(){
    return home({
      url:'/getdocter',
    })
  }
  
// https://dxy.com/app/i/ask/drug/detail/search?keyword=A&page_index=1&items_per_page=20
export function getMedicine(keyword, page_index, items_per_pagee) {
    return request({
      url: 'app/i/ask/drug/detail/search',
      params: {
        keyword: keyword,
        page_index: page_index,
        items_per_pagee: items_per_pagee
      }
    });
  } 
  