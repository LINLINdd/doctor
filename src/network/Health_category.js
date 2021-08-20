import { request } from './request'


export function getHealth_category(
    items_per_page,
    page_index,
    tag_id,
    category_tag_id) {
    return request({
        url: 'app/i/ask/healthwiki/feed',
        params: {
            items_per_page,
            page_index,
            tag_id,
            category_tag_id
        }
    })
}


export function getDiseasesList(
    section_group_id,
    tag_id,
    page_index,
    items_per_page,
) {
    return request({
        url: 'app/i/ask/question/public/search',
        params: {
            section_group_id,
            tag_id,
            page_index,
            items_per_page,
        }
    })
}
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

//   https://dxy.com/app/i/columns/search/tips/v2?q=BB
//   搜索出来的数据
export function getSearchD(
    q  
) {
    return request({
      url:'app/i/columns/search/tips/v2',
      params:{
        q,
      }
    })
}