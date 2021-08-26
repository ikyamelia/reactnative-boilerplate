'react-native-gesture-handler';

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Store} from './src/Store/Store';
import {Provider} from 'react-redux';
import Navigation from './src/Navigation/Navigation';

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
