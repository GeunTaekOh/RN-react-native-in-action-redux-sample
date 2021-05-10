//connect 함수를 이용해 자식 컴포넌트에서 리덕스 스토어 참조
//connect : 커링 함수
//커링 함수 : 다른 함수를 반환하는 함수
//connect(args)(args) -> 첫번째 인수로 실행된 결과로 만들어진 객체는 두번째 인수로 전달된 컴포넌트의 props로 사용 가능

import React from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'

import  { connect } from 'react-redux'

class Books extends React.Component<{}> {
  render(){
    const {books} = this.props // connect 함수가 books 배열을 반환하므로 이 배열을 props 로 참조 가능

    return(
      <View style={styles.container}>
        <Text style={styles.title}>Books</Text>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.booksContainer}>
            {
              books.map((book, index) => (
                <View style={styles.book} key={index}>
                  <Text style={styles.name}>{book.name}</Text>
                  <Text style={styles.author}>{book.author}</Text>
                </View>
              ))
            }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  booksContainer:{
    borderTopWidth:1,
    borderTopColor:'#ddd',
    flex:1
  },
  title:{
    paddingTop:30,
    paddingBottom:20,
    fontSize:20,
    textAlign:'center'
  },
  book:{
    padding:20
  },
  name:{
    fontSize:18
  },
  author:{
    fontSize:14,
    color:'#999'
  }
})

const mapStateToProps = (state) => ({
  books:state.bookReducer.books
})  // 리덕스의 state 를 인수로 전달받고, 하나의 키(여기서는 books)를 포함한 객체를 반환.
// connect 함수의 첫번째 인자로 사용되며 mapStateToProps 에서 생성해주는 객체값을 Books 컴포넌트에서 사용가능하도록 connect 함수 사용

export default connect(mapStateToProps)(Books)