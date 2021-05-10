//전역 state 만들기.
import { combineReducers } from 'redux';


import bookReducer from './bookReducer'

//모든 리듀서를 포함하는 루트 리듀서를 만듦.
const rootReducer = combineReducers({
  bookReducer
})

export default rootReducer

