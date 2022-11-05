import { combineReducers } from 'redux'
import { userData } from './ex-rducer-data'
import { counter } from './ex-reducer'
export default combineReducers({
    //reducers Combine
    counter,
    userData
})