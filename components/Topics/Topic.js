import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../constants/colors';

const Topic = ({ title }) => (
  <View style={styles.topicContainer}>
    <Ionicons name="ios-globe" size={60} color={colors.highlight} />
    <View style={styles.textContainer}>
      <Text style={styles.text}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  topicContainer: {
    height: 120,
    width: 90,
    maxWidth: 100,
    padding: 7,
    borderColor: colors.highlight,
    borderWidth: 1,
    borderRadius: 3,
    alignItems: 'center',
    margin: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  text: {
    color: colors.lightBg,
    fontSize: 11
  }
});

export default Topic;
