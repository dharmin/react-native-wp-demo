import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import colors from '../../constants/colors';

const SubHeaderTitle = ({ children, style }) => (
  <View>
    <View style={styles.textContainer}>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
    <View style={styles.bar} />
  </View>
);

const styles = StyleSheet.create({
  text: {
    color: colors.darkHeadColor,
    fontSize: 18
  },
  bar: {
    height: 3,
    width: 30,
    backgroundColor: colors.lightBg,
    marginVertical: 15,
    borderRadius: 8
  }
});

export default SubHeaderTitle;
