import React, { Component, PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  AppRegistry,
  TouchableHighlight
} from 'react-native';
import { createStore } from 'redux';
/*
 *  auth:andy
 */
class Counter extends Component {


  render() {
    const { value, onIncrement, onDecrement } = this.props

    console.log(value);
    //view
    return (
      <View style={{ alignItems: 'center', }}>
          <TouchableHighlight onPress={onIncrement}>
            <Text style={{ fontSize: 20, margin:5}}>Tap me to ++</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={onDecrement}>
            <Text style={{ fontSize: 20,margin:5 }}>Tap me to -- </Text>
          </TouchableHighlight>
          <View style={styles.numberContainer}>
            <Text style={styles.number} >{value}</Text>
          </View>
      </View>
    );
  }
}

//reducer函数，state默认值是0
function counter(state = 0, action) {
  //根据传进来的action改变state的值
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//传入reducer函数创建store
const store = createStore(counter);

export default class movie_redux extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }


  componentDidMount = () => {


    //设置监听，当store的state值更新，刷新render
    store.subscribe(() =>
      this.setState({ value: store.getState() }));
  }
  render() {

    return (<Counter
      value={this.state.value}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' }) }
      onDecrement={() => store.dispatch({ type: 'DECREMENT' }) }
      />
    );
  }
}

const styles = StyleSheet.create({
  numberContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 36,
    color:'deeppink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('movie_redux', () => movie_redux)