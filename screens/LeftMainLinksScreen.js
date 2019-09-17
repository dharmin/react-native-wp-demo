import React from 'react';
import {
  ScrollView, View, Text, StyleSheet, Dimensions
} from 'react-native';

import defaultStyles from '../constants/styles';

const { width } = Dimensions.get('window');

const LeftMainLinksScreen = () => (
  <ScrollView>
    <View style={[styles.container, defaultStyles.flex1]}>
      <Text>Left Main Links Screen</Text>
      <View style={styles.sample}>
        <Text>Sample</Text>
      </View>
      <View style={styles.sample}>
        <Text>Sample</Text>
      </View>
      <View style={styles.sample}>
        <Text>Sample</Text>
      </View>
      <View style={styles.sample}>
        <Text>Sample</Text>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sample: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    width
  }
});

export default LeftMainLinksScreen;
