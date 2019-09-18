import React from 'react';
import {
  ScrollView, View, Text, StyleSheet, Dimensions
} from 'react-native';

import defaultStyles from '../constants/styles';
import SearchBox from '../components/SearchBox';
import colors from '../constants/colors';
import CategoriesList from '../components/Categorries/CategoriesList';
import Topics from '../components/Topics/Topics';

const { width } = Dimensions.get('window');

const LeftMainLinksScreen = () => (
  <ScrollView>
    <View style={[styles.container, defaultStyles.flex1]}>
      <SearchBox />
      <CategoriesList />
      <Topics />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg
  },
  sample: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    width
  }
});

export default LeftMainLinksScreen;
