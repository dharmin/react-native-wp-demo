import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import colors from '../../constants/colors';

const SearchedNewsList = (props) => {
  const a = '';

  return (
    <View>
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Apple</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Lorem ipsum dolor sit amet </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 14,
    borderBottomColor: colors.bg,
    borderBottomWidth: 1,
    padding: 10
  },
  itemTitle: {
    fontFamily: 'robotoLight'
  }
});

export default SearchedNewsList;
