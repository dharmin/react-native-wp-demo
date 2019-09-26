import React from 'react';
import {
  View, StyleSheet, SafeAreaView, TouchableOpacity
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import client from '../graphql/config';
import searchPosts from '../graphql/queries/searchPosts';
import { setSearchData } from '../store/actions/search.actions';
import useSearchedNewsListLoaderContext from '../contexts/SearchedNewsListLoaderContext';
import SearchQuery from '../components/Search/SearchQuery';

const SearchQueryScreen = ({ navigation }) => {
  const [, setLoading] = useSearchedNewsListLoaderContext();
  const dispatch = useDispatch();
  const globalQuery = useSelector(state => state.search.query);

  const handleQuerySubmit = (query) => {
    if (query) {
      if (query === globalQuery) {
        navigation.navigate('SearchedNews');
        return;
      }

      // Fetches data according to the query
      setLoading(true);
      navigation.navigate('SearchedNews');
      client
        .query({
          query: searchPosts,
          variables: {
            keyword: query,
            cursor: ''
          }
        })
        .then(({ data: { posts: { nodes, pageInfo } } }) => dispatch(
          setSearchData({
            query,
            nodes,
            pageInfo,
            replacePost: true
          })
        ))
        .then(() => setLoading(false));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchQuery handleQuerySubmit={handleQuerySubmit} disabled={false} />
        <View>
          <TouchableOpacity />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});

export default SearchQueryScreen;
