import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: '/dxy/',
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
export function requestC(config) {
    const open = axios.create({
        baseURL: '/shuju/',
        timeout: 5000,
        method: 'GET'
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
export function positioning(config) {
    const open = axios.create({
        baseURL: '/positioning/',
        method: 'GET'
    })

    open.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })
    return open(config)
}
export function home(config) {
    const open = axios.create({
        baseURL: '/pbm/',
        timeout: 5000,
        method: 'GET'
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
