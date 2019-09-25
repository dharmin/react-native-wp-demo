import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Platform
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { useSelector } from 'react-redux';
import useSearchedNewsListLoaderContext from '../contexts/SearchedNewsListLoaderContext';
import defaultStyles from '../constants/styles';
import NewsContainerScreen from './NewsContainerScreen';
import colors from '../constants/colors';
import SearchedNewsList from '../components/NewsList/SearchedNewsList';
import SearchQuery from '../components/Search/SearchQuery';

const { width, height } = Dimensions.get('window');

// TODO:
// 1 - Show list of all searched posts
// 2 - Then Make that search component
// 3 - Then fetch a single post data and display it in another side

const SearchedNewsScreen = ({ navigation }) => {
  const [isLoading] = useSearchedNewsListLoaderContext();
  const { query, posts } = useSelector(state => state.search);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollToPosition = (value) => {
    ref.current.scrollTo({ x: value });
  };

  const ref = useRef();

  return (
    <ScrollView
      style={[styles.main, defaultStyles.flex1]}
      horizontal
      pagingEnabled
      ref={view => (ref.current = view)}
    >
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            console.log('here');
            navigation.pop();
          }}
        >
          <SearchQuery disabled query={query} />
        </TouchableOpacity>
        <SearchedNewsList posts={posts} />
      </View>
      <NewsContainerScreen />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: Platform.OS !== 'android' ? getStatusBarHeight() : 0
  },
  container: {
    flex: 1,
    backgroundColor: colors.lightBg,
    width
  }
});

export default SearchedNewsScreen;
