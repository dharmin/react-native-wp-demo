import React from 'react';
import {
  View, Text, StyleSheet, Dimensions
} from 'react-native';
import defaultStyles from '../../constants/styles';

const { height } = Dimensions.get('window');

const MainLoader = () => (
  <View style={[styles.container, defaultStyles.flex1]}>
    <Text styles={styles.text}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MainLoader;