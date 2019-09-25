import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from 'react-native';
import colors from '../../constants/colors';

const SearchedNewsList = ({ posts }) => {
  const handleRenderItem = ({ item: { title, id } }) => (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  const _keyExtractor = item => item.id;

  const handleEndReached = () => {
    console.log('endReached');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        {posts.length !== 0 && (
          <FlatList
            data={posts}
            renderItem={handleRenderItem}
            keyExtractor={_keyExtractor}
            onEndReached={handleEndReached}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    borderBottomColor: colors.bg,
    borderBottomWidth: 1,
    padding: 15
  },
  itemTitle: {
    fontFamily: 'robotoLight'
  }
});

export default SearchedNewsList;
