import { requestC } from './request'
import { requestB } from './request'


export function getiInquiry() {
    return requestC({
        url: '/getchat',
    })
}
export function setiInquiry(id, name, title_content) {
    console.log(id, name, title_content);
    return requestB({
        url: '/Setchat',
        params: { id, name, title_content }
    })
}
