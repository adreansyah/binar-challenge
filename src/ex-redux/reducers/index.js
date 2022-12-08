import { combineReducers } from 'redux'
import { userData } from './ex-rducer-data'
import { counter } from './ex-reducer'
import { dataList } from './lessonReducer'

export default combineReducers({
    //reducers Combine
    counter,
    userData,
    dataList
})