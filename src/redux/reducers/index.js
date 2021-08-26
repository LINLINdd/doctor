import msg from "./msg";
import users from "./users";
import placename from "./placename";
import CheckHospital from "./CheckHospital";
import { combineReducers } from 'redux'
export const rootReducer = combineReducers({
    msg,
    placename,
    CheckHospital
})