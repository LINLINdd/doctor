import { request } from './request'
export function getCheckDisease(
) {
    return request({
        url: 'app/i/content/search/tag/index?page_index=1&tag_category_id=6,8',
    })
}

export function searchkDisease(search_content,
    tag_category_id,
    search_type) {
    return request({
        url: 'app/i/content/search/tag',
        params: {
            search_content,
            tag_category_id,
            search_type,
        }
    })
}


export function searchBottle(items_per_page = 20,
    page_index = 1,
    keyword = '') {
    return request({
        url: 'app/i/ask/drug/detail/search/list',
        params: {
            items_per_page,
            page_index,
            keyword
        }
    })
}


