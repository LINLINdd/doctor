import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: '/apiA/',
        timeout: 5000,
        withCredentials : true
    })
    // axios.defaults.withCredentials = true
    instance.interceptors.request.use(config => {
        config.headers['Cookie'] = '_ga=GA1.2.1533901395.1629096106'
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