import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import { useDispatch } from 'react-redux';

import client from '../graphql/config';
import searchPosts from '../graphql/queries/searchPosts';
import { setSearchData } from '../store/actions/search.actions';
import useSearchedNewsListLoaderContext from '../contexts/SearchedNewsListLoaderContext';
import SearchQuery from '../components/Search/SearchQuery';

const SearchQueryScreen = ({ navigation }) => {
  const [, setLoading] = useSearchedNewsListLoaderContext();
  const dispatch = useDispatch();

  const handleQuerySubmit = (query) => {
    if (query) {
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
            pageInfo
          })
        ))
        .then(() => setLoading(false));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchQuery handleQuerySubmit={handleQuerySubmit} disabled={false} />
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
