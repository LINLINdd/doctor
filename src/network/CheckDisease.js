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
//医院
export function getbHospitalt(page_index = 1, items_per_page = 10, postcode) {
    return request({
        url: 'app/i/recommend/hospital/combination/page',
        params: {
            page_index,
            items_per_page,
            postcode,
        }
    })
}
export function CheckHospital(q) {
    return request({
        url: 'app/i/recommend/hospital/combination/page',
        params: {
            q
        }
    })
}

