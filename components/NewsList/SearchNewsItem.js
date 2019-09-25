/* eslint-disable no-nested-ternary */
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import NewsItem from './NewsItem';
import MainLoader from '../Loaders/MainLoader';

const { width } = Dimensions.get('window');

const SearchNewsItem = ({ loading, post, scrollToPosition }) => (
  <View style={styles.container}>
    {loading ? (
      <MainLoader />
    ) : post ? (
      <NewsItem
        options={{ animated: false }}
        {...post.postBy}
        setMainScrollPosition={scrollToPosition}
      />
    ) : (
      <></>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1
  }
});

export default SearchNewsItem;
