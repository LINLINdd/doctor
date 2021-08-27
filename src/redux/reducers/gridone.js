import { GRIDONE } from "../constants"
export default function gridoneReducer(state = [], action) {
    if (action === undefined) {
        return state;
    }
    const { type, msg } = action;
    console.log(msg);
    switch (type) {
        case GRIDONE:
            return msg;
        default:
            return state;
    }
}