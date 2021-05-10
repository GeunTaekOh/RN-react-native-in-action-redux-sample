//리듀서는 객체를 반환하는 함수. 여러 리듀서를 묶어 전역 state 생성
//리듀서는 데이터의 저장소

import { ADD_BOOK, REMOVE_BOOK } from '../actions'
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';


const initialState = {
  books : [{name:'East of Eden', author:'John Steinbeck', id:uuid()}]
}

const bookReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_BOOK:
      return{
        books:[
          ...state.books,
          action.book
        ]
      }
    case REMOVE_BOOK:
      const index = state.books.findIndex(book => book.id === action.book.id)
      return{
        books:[
          ...state.books.slice(0,index),
          ...state.books.slice(index+1)
        ]
      }
    default:
      return state
  }
}



export default bookReducer