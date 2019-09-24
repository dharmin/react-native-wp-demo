import React, { Component } from 'react';
import {
  ActivityIndicator, StyleSheet, View, Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default class MainLoader extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

// export default MainLoader;
