//리덕스 스토어의 books 배열의 값을 변경하려면 액션을 통해서만 값을 변경할 수 있음.
//리덕스의 dispatch 함수로 액션을 호출하면, 앱의 모든 리듀서에 액션이 전달됨.
//액션의 type속성을 확인하고 리듀서와 관련된 액션에 따라 리듀서가 리턴한 겂을 업데이트 해줌

export const ADD_BOOK = 'ADD_BOOK'

export function addBook(book){  // type 값과 다루고 싶은 객체를 전달.
  return{
    type:ADD_BOOK,
    book
  }
}