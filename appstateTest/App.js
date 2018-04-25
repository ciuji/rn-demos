import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
  TouchableOpacity,
  AppRegistry,
  Linking,
  AppState
} from 'react-native';

export default class App extends React.Component {
  state = {
    currentAppState: AppState.currentState,
  }

  date: Date

  time: number


  componentDidMount() {

    AppState.addEventListener('change', this._handleAppStateChange);
  }
  componentWillUnmount() {

    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  _handleAppStateChange = (nextAppState) => {
    if (nextAppState === "background") {
      this.date = new Date();
    }
    if (nextAppState === "active") {
      if (this.date) {
        this.time = new Date() - this.date;
      }
    }
    this.setState({ currentAppState: nextAppState });
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.link}>
          <Text>打电话{"\n"}</Text>
          {console.log(this.state.currentAppState)}
        </TouchableOpacity>
        <Text>离开页面了    {this.time}    毫秒</Text>

      </View>
    );
  }

  link() {
    return Linking.openURL("tel:10086")
  }



};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
