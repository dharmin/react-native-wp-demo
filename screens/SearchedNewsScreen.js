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
import { useLazyQuery } from '@apollo/react-hooks';

import useSearchedNewsListLoaderContext from '../contexts/SearchedNewsListLoaderContext';
import defaultStyles from '../constants/styles';
import colors from '../constants/colors';
import SearchedNewsList from '../components/NewsList/SearchedNewsList';
import SearchQuery from '../components/Search/SearchQuery';
import MainLoader from '../components/Loaders/MainLoader';
import SearchNewsItem from '../components/NewsList/SearchNewsItem';
import getSinglePost from '../graphql/queries/getSinglePost';

const { width, height } = Dimensions.get('window');

// TODO:
// 1 - Show list of all searched posts
// 2 - Then Make that search component
// 3 - Then fetch a single post data and display it in another side

const SearchedNewsScreen = ({ navigation }) => {
  const [isLoading] = useSearchedNewsListLoaderContext();
  const [getPost, { loading, data }] = useLazyQuery(getSinglePost);

  const { query, posts } = useSelector(state => state.search);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollToPosition = (value) => {
    ref.current.scrollTo({ x: value });
  };

  const ref = useRef();

  const handlePostPress = (postId) => {
    getPost({
      variables: {
        id: postId
      }
    });
    scrollToPosition(width);
  };

  return (
    <ScrollView
      style={[styles.main, defaultStyles.flex1]}
      horizontal
      pagingEnabled
      ref={view => (ref.current = view)}
    >
      {isLoading ? (
        <MainLoader />
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              console.log('here');
              navigation.pop();
            }}
          >
            <SearchQuery disabled query={query} />
          </TouchableOpacity>
          <SearchedNewsList posts={posts} handlePostPress={handlePostPress} />
        </View>
      )}
      <SearchNewsItem
        loading={loading}
        post={data}
        scrollToPosition={scrollToPosition}
      />
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
