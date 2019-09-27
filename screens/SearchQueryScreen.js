import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import client from '../graphql/config';
import searchPosts from '../graphql/queries/searchPosts';
import { setSearchData } from '../store/actions/search.actions';
import useSearchedNewsListLoaderContext from '../contexts/SearchedNewsListLoaderContext';
import SearchQuery from '../components/Search/SearchQuery';
import PrevSearchesList from '../components/NewsList/PrevSearchesList';

const SearchQueryScreen = ({ navigation }) => {
  const [, setLoading] = useSearchedNewsListLoaderContext();
  const dispatch = useDispatch();
  const { query: globalQuery, prevQueries } = useSelector(
    state => state.search
  );

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
        {prevQueries.length !== 0 && (
          <PrevSearchesList
            prevQueries={prevQueries}
            handleQuerySubmit={handleQuerySubmit}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  lastHeadContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 15
  },
  lastHead: {
    fontSize: 16,
    fontFamily: 'roboto'
  },
  prevItem: {
    padding: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  itemText: {
    fontFamily: 'robotoLight',
    fontSize: 16
  }
});

export default SearchQueryScreen;
