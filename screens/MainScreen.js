import React from 'react';
import {
  ScrollView, StyleSheet, Dimensions, View, Text
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import LeftMainLinksScreen from './LeftMainLinksScreen';
import defaultStyles from '../constants/styles';
import useMainHorizontalContext from '../contexts/MainHorizontalContext';

const { width } = Dimensions.get('window');

const FullScreen = ({ children, style }) => (
  <View style={[styles.container, style]}>
    <Text>{children}</Text>
  </View>
);

const MainScreen = () => {
  const [isHorizontalScroll] = useMainHorizontalContext();
  return (
    <ScrollView
      style={[styles.main, defaultStyles.flex1]}
      horizontal
      pagingEnabled
      scrollEnabled={isHorizontalScroll}
    >
      <LeftMainLinksScreen />
      <FullScreen style={styles.second}>Second</FullScreen>
    </ScrollView>
  );
};

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

export default MainScreen;
