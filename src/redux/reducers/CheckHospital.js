import { CHECKHOSPITAL } from "../constants";
export default function value(state = '', action) {
    //初始化
    if (action === undefined) {
        return state;
    }
    const { type, value } = action;
    switch (type) {
        case CHECKHOSPITAL:
            return value;
        default:
            return state;
    }
}
