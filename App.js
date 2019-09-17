import React from 'react';
import {
  ScrollView, StyleSheet, Text, View, Dimensions
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Provider } from 'react-redux';
import defaultStyles from './constants/styles';
import store from './store';
import LeftMainLinksScreen from './screens/LeftMainLinksScreen';

const { width } = Dimensions.get('window');

const FullScreen = ({ children, style }) => (
  <View style={[styles.container, style]}>
    <Text>{children}</Text>
  </View>
);

export default function App() {
  return (
    <Provider store={store}>
      <ScrollView
        style={[styles.main, defaultStyles.flex1]}
        horizontal
        pagingEnabled
      >
        <LeftMainLinksScreen />
        <FullScreen style={styles.second}>Second</FullScreen>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: getStatusBarHeight()
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width
  },
  second: {
    backgroundColor: 'yellow'
  }
});
