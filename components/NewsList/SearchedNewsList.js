import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../../constants/colors';

const SearchedNewsList = ({ posts, handlePostPress, handleEndReached }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { hasPrevPage } = useSelector(state => state.search);
  const handleRenderItem = ({ item: { title, id } }) => (
    <TouchableOpacity onPress={() => handlePostPress(id)}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  const _keyExtractor = item => item.id;

  const _handleEndReached = () => {
    if (hasPrevPage) {
      setIsLoading(true);
      handleEndReached();
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, [posts]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          marginBottom: 30
        }}
      >
        {posts.length !== 0 && (
          <FlatList
            data={posts}
            renderItem={handleRenderItem}
            keyExtractor={_keyExtractor}
            onEndReached={_handleEndReached}
            onEndReachedThreshold={0}
          />
        )}
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
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
    marginHorizontal: 15,
    fontFamily: 'robotoLight'
  }
});

export default SearchedNewsList;
