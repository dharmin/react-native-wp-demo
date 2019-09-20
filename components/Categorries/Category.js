import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../constants/colors';

const Category = ({ title, navigation }) => (
  <TouchableOpacity
    onPress={() => {
      if (!title) return;
      navigation.push('Main', { categoryName: title });
    }}
  >
    <View style={styles.container}>
      <Ionicons name="md-bookmark" size={40} color={colors.highlight} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 8
  },
  text: {
    color: colors.lightBg,
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: '600'
  },
  textContainer: {
    marginTop: 15
  }
});

export default withNavigation(Category);
