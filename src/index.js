import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import App from './app';

const AppContainer = () => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <App />
    </KeyboardAvoidingView>
  );
};

export default AppContainer;
