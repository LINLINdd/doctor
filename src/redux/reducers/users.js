import { ADDUSER } from "../constants";
//state ---> 保存上一次记录
export default function users(state=[],action){
    if(action.type===undefined){
        return state;
    }
    const {type,user}=action;
    switch(type){
        case ADDUSER:
            // state.push
            // state.unshift(user)
            // return state; 
            return [user,...state]; 
            // Redux  --->  React-Redux
        default:
            return state;
    }
}