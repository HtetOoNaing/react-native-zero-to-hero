import thunk from 'redux-thunk'
import userReducer from './reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const rootReducer = combineReducers({userReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk))