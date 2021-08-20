import { requestB } from './request'


export function login(username, password) {
    console.log(username, password);
    return requestB({
        url: '/login',
        params: {
            username, password
        }
    })
}

// app/i/ask/healthwiki/feed?items_per_page=10&page_index=2&tag_id=0&category_tag_id=24822
