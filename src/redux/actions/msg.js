import { POSITION, PLACENAME } from "../constants"

export const getposition = (msg) => ({ type: POSITION, msg })
export const getplacename = (place) => ({ type: PLACENAME, place })

// export const aysncLmAction = (msg, time) => {
//     return (dispatch) => {
//         // 执行异步操作
//         setTimeout(() => {
//             // response--->dispatch
//             dispatch(lkAction(msg))
//         }, time)
//     }
// }