import React, { useEffect, useState, useRef } from 'react';
import {
  ScrollView, StyleSheet, View, Text, Dimensions
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { useQuery } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';

// import { AppLoading } from 'expo';
import LeftMainLinksScreen from './LeftMainLinksScreen';
import defaultStyles from '../constants/styles';
import useMainHorizontalContext from '../contexts/MainHorizontalContext';
import NewsContainerScreen from './NewsContainerScreen';
import initQuery from '../graphql/queries/initialQuery';
import { simpleAction } from '../store/actions/common.actions';

import MainLoader from '../components/Loaders/MainLoader';

const { width } = Dimensions.get('window');

const MainScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHorizontalScroll] = useMainHorizontalContext();
  const { loading, error, data } = useQuery(initQuery);
  const dispatch = useDispatch();
  const ref = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollToPosition = (value) => {
    ref.current.scrollTo({ x: value });
  };

  useEffect(() => {
    if (!loading) {
      if (error) {
        return (
          <View>
            <Text>
              Error:
              {error}
            </Text>
          </View>
        );
      }
      dispatch(simpleAction(data)).then(() => {
        setIsLoading(false);
        if (ref.current) {
          scrollToPosition(width);
        }
      });
    }
  }, [data, dispatch, loading, error, scrollToPosition]);

  return isLoading ? (
    <MainLoader />
  ) : (
    <ScrollView
      style={[styles.main, defaultStyles.flex1]}
      horizontal
      pagingEnabled
      scrollEnabled={isHorizontalScroll}
      ref={view => (ref.current = view)}
    >
      <LeftMainLinksScreen setMainScrollPosition={scrollToPosition} />
      <NewsContainerScreen setMainScrollPosition={scrollToPosition} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: getStatusBarHeight()
  }
});

export default MainScreen;
