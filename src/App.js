import React, { Component } from 'react';
// imrn
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './Reducers';

export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase - this should be moved to seperate file and hidden
    const config = {
      apiKey: 'AIzaSyBMkKc9pS_K2lD0nA_8R-IL4EfCnQ0RxlA',
      authDomain: 'manager-357ad.firebaseapp.com',
      databaseURL: 'https://manager-357ad.firebaseio.com',
      projectId: 'manager-357ad',
      storageBucket: 'manager-357ad.appspot.com',
      messagingSenderId: '17619557464'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}
