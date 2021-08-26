import { POSITION, } from "../constants";
export default function msg(state = '等您消息', action) {
    //初始化
    if (action === undefined) {
        return state;
    }
    const { type, msg } = action;
    switch (type) {
        case POSITION:
            return msg;
        default:
            return state;
    }
}
