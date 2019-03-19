import React, { Component } from 'react';
// imrn
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// This is a middleware that solves aysnc in redux
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './Reducers';
import { LoginForm } from './Components';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
