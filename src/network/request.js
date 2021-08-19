import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: '/dxy/',
        timeout: 5000,
        withCredentials : true
    })
    // axios.defaults.withCredentials = true
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })

    instance.interceptors.response.use(res => {
        return res
    }, err => {
        console.log(err);
    })

    return instance(config)
}

// app/i/ask/healthwiki/feed?items_per_page=10&page_index=2&tag_id=0&category_tag_id=24822