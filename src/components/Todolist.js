import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import {
  loadDataSuccess,
  changeDataSuccess
} from '../actions/todolist';

class TodoList extends Component {

  componentWillMount() {
    this.props.loadData();
  }
  
  render() {
    const {listData, status} = this.props;   
    return (
      <View style={styles.container}>
        {
          listData.map((option, index) => {
            return (
              <Text onPress={() => {
                this.props.changeData();
              }} key={index} style={styles.welcome}>
                {option.content}
              </Text>
            )
          })}
        <Text>{status == true ? "abc" : "bcd"}</Text>
      </View>
    );
  }
}

export default connect(state => ({
  listData: state.listData.data,
  status: state.listData.status
})
  , dispatch => ({
    changeData: () => dispatch(changeDataSuccess()),
    loadData: () => dispatch(loadDataSuccess())
  })
)(TodoList);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


