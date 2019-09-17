import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import SubHeaderTitle from '../Text/SubHeaderTitle';
import Category from './Category';
import useMainHorizontalContext from '../../contexts/MainHorizontalContext';

const CategoriesList = () => {
  const [, setIsMainHorizontalScroll] = useMainHorizontalContext();

  const startMainHorizontalScroll = () => setIsMainHorizontalScroll(true);

  const stopMainHorizontalScroll = () => setIsMainHorizontalScroll(false);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <SubHeaderTitle>CATEGORIES</SubHeaderTitle>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onTouchStart={stopMainHorizontalScroll}
        onMomentumScrollBegin={stopMainHorizontalScroll}
        onMomentumScrollEnd={startMainHorizontalScroll}
        onScrollBeginDrag={stopMainHorizontalScroll}
        onScrollEndDrag={startMainHorizontalScroll}
        onTouchEnd={startMainHorizontalScroll}
        onTouchCancel={startMainHorizontalScroll}
      >
        <Category title="All News" />
        <Category title="Trending" />
        <Category title="Bookmarks" />
        <Category title="Unread" />
        <Category title="All News" />
        <Category title="Trending" />
        <Category title="Bookmarks" />
        <Category title="Unread" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 35,
    width: '100%',
    alignItems: 'center'
  },
  titleContainer: {
    width: '80%'
  },
  list: {}
});

export default CategoriesList;
