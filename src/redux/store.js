import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import gridoneReducer from './reducers/gridone'

export default  createStore(gridoneReducer,applyMiddleware(thunk))