//리듀서는 객체를 반환하는 함수. 여러 리듀서를 묶어 전역 state 생성
//리듀서는 데이터의 저장소

const initialState = {
  books : [{name:'East of Eden', author:'John Steinbeck'}]
}

const bookReducer = (state = initialState) => {
  return state
}

export default bookReducer