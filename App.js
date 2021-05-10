import React from 'react'

import Books from './src/Books'
import rootReducer from './src/reducers' // reducers 폴더 하위 경로의 index.js 에서 export 해놓은 rootReducer 를 가져오는 것
        // from 뒤에는 export 해놓은 폴더 경로를 넣어주면 됨

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(rootReducer) // store 생성 시 reducer 를 인자로 넣어줘야함

export default class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <Books/>
      </Provider>
    )
  }
}
//Books 컴포넌트는 Provider의 자식 컴포넌트이므로 리덕스 스토어에 저장된 모든 객체 참조 가능