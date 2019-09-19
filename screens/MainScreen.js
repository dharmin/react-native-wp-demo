import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import LeftMainLinksScreen from './LeftMainLinksScreen';
import defaultStyles from '../constants/styles';
import useMainHorizontalContext from '../contexts/MainHorizontalContext';
import NewsContainerScreen from './NewsContainerScreen';

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
      <NewsContainerScreen />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: getStatusBarHeight()
  }
});

export default MainScreen;
