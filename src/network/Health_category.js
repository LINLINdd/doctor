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

// app/i/ask/healthwiki/feed?items_per_page=10&page_index=2&tag_id=0&category_tag_id=24822
