import React, { useEffect, useState } from 'react';
import {
  ScrollView, StyleSheet, View, Text
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { useQuery } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';

import { AppLoading } from 'expo';
import LeftMainLinksScreen from './LeftMainLinksScreen';
import defaultStyles from '../constants/styles';
import useMainHorizontalContext from '../contexts/MainHorizontalContext';
import NewsContainerScreen from './NewsContainerScreen';
import initQuery from '../graphql/queries/initialQuery';
import { simpleAction } from '../store/actions/common.actions';

import MainLoader from '../components/Loaders/MainLoader';

const MainScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHorizontalScroll] = useMainHorizontalContext();
  const { loading, error, data } = useQuery(initQuery);
  const dispatch = useDispatch();

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
      dispatch(simpleAction(data)).then(() => setIsLoading(false));
    }
  }, [data, dispatch, loading, error]);

  return isLoading ? (
    <MainLoader />
  ) : (
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
