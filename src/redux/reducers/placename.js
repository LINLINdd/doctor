import { PLACENAME } from "../constants";
export default function placename(state = '全国', action) {
    //初始化
    if (action === undefined) {
        return state;
    }
    const { type, place } = action;
    switch (type) {
        case PLACENAME:
            return place;
        default:
            return state;
    }
}