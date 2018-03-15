import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import {View, FlatList,Button, Text, ActivityIndicator, StyleSheet} from 'react-native';

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <View>
        <Text>{value}</Text>
        <Button title="increase" onPress={()=>{onIncreaseClick}}/>
      </View>
    )

  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default class Cc extends Component{
 
    render(){
      return (
       <Provider store={store}>
        <App />
      </Provider>
      )
    }
}