import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import colors from '../../constants/colors';

const BackButton = ({ setMainScrollPosition }) => (
  <View style={styles.btnContainer}>
    <TouchableOpacity
      onPress={() => setMainScrollPosition(0)}
      style={styles.btn}
    >
      <Ionicons name="ios-arrow-round-back" size={24} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    backgroundColor: colors.lightBg,
    zIndex: 1,
    height: 45,
    width: 45,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 45 / 2,
    elevation: 50,
    borderColor: colors.darkHeadColor,
    borderWidth: 1,
    shadowColor: colors.darkHeadColor,
    shadowOpacity: 0.16,
    shadowOffset: {
      width: 8,
      height: 8
    }
  },
  btn: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default BackButton;
