import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../../constants/colors';

const { width } = Dimensions.get('window');

const Btn = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

const Header = ({ title1, title2, setMainScrollPosition }) => {
  const a = '';
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headTitleContainer}>
        <Text style={styles.title}>{title1}</Text>
      </View>
      <View style={styles.headTitleContainer}>
        <TouchableWithoutFeedback
          onPressIn={() => {
            setMainScrollPosition(0);
            console.log('Hello World');
          }}
          style={{
            backgroundColor: 'red', paddingHorizontal: 10, position: 'absolute', zIndex: 3, elevation: 2
          }}
        >
          <Ionicons name="ios-arrow-round-back" size={24} />
        </TouchableWithoutFeedback>
        <Text style={styles.title}>{title2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    zIndex: 2,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.lightBg,
    elevation: 1
  },
  headTitleContainer: {
    width,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1
  },
  title: {
    fontFamily: 'roboto',
    textAlign: 'center',
    color: colors.highlight,
    fontSize: 20,
    flexGrow: 1
  }
  // btnContainer: {},
  // btn: {
  //   paddingHorizontal: 10,
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }
});

export default Header;
