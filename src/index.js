import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
// import {Provider} from 'react-redux';
import App from './app';
// import Store from './store';
// import 'react-native-gesture-handler';

const AppContainer = () => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <App />
    </KeyboardAvoidingView>
  );
};

export default AppContainer;
