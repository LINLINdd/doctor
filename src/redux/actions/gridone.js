import { GRIDONE } from "../constants"
import { getGridone } from '../../network/home'
export const gridoneAction = (msg) => {

    return { type: GRIDONE, msg }
}
// let { data: msg } = getGridone();
export const aysncAction = () => {
    return (dispatch) => {
        let promise= getGridone();
        promise.then((res)=>{

            dispatch(gridoneAction(res.data.data))
        })
       
    }
}


// getGridone = async () => {
//     let { data: res } = await getGridone();
//     console.log(res)
//     this.setState({ arr: res.data })
// }