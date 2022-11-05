import reducers from 'ex-redux/reducers'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk, createLogger()))

export default store