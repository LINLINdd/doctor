import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: '/dxy/',
        timeout: 5000
    })

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


export function requestB(config) {
    const open = axios.create({
        baseURL: '/shuju/',
        timeout: 5000,
        method: 'POST'
    })

    open.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })

    open.interceptors.response.use(res => {
        return res
    }, err => {
        console.log(err);
    })

    return open(config)
}

// app/i/ask/healthwiki/feed?items_per_page=10&page_index=2&tag_id=0&category_tag_id=24822