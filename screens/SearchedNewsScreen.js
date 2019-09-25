import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Platform
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { useSelector, useDispatch } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';

import useSearchedNewsListLoaderContext from '../contexts/SearchedNewsListLoaderContext';
import defaultStyles from '../constants/styles';
import colors from '../constants/colors';
import SearchedNewsList from '../components/NewsList/SearchedNewsList';
import SearchQuery from '../components/Search/SearchQuery';
import MainLoader from '../components/Loaders/MainLoader';
import SearchNewsItem from '../components/NewsList/SearchNewsItem';
import getSinglePost from '../graphql/queries/getSinglePost';
import client from '../graphql/config';
import searchPosts from '../graphql/queries/searchPosts';
import { setSearchData } from '../store/actions/search.actions';

const { width } = Dimensions.get('window');

const SearchedNewsScreen = ({ navigation }) => {
  const [isLoading] = useSearchedNewsListLoaderContext();
  const {
    query, posts, cursor, hasPrevPage
  } = useSelector(
    state => state.search
  );
  const [getPost, { loading, data }] = useLazyQuery(getSinglePost);

  const dispatch = useDispatch();

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

  const handleEndReached = () => {
    client
      .query({
        query: searchPosts,
        variables: {
          keyword: query,
          cursor
        }
      })
      .then(({ data: { posts: { nodes, pageInfo } } }) => dispatch(
        setSearchData({
          query,
          nodes,
          pageInfo
        })
      ));

    return Promise.resolve(true);
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
              navigation.pop();
            }}
          >
            <SearchQuery disabled query={query} />
          </TouchableOpacity>
          <SearchedNewsList
            posts={posts}
            handlePostPress={handlePostPress}
            handleEndReached={handleEndReached}
            hasPrevPage={hasPrevPage}
          />
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
