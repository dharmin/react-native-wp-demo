import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const SearchBox = ({ navigation }) => (
  <TouchableOpacity
    style={{ width: '80%' }}
    onPress={() => navigation.navigate('Search')}
  >
    <View style={styles.searchContainer}>
      <Ionicons name="ios-search" size={24} color={colors.lightText} />
      <Text style={styles.searchText}>Search For News</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.lightBg,
    marginTop: 50,
    borderRadius: 8,
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchText: {
    color: colors.lightText,
    fontSize: 16
  }
});

export default withNavigation(SearchBox);
