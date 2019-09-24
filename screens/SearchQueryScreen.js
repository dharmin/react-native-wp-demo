import React from 'react';
import {
  View, Text, StyleSheet, Button
} from 'react-native';

// TODO:
// Need to build a custom search box;

const SearchQueryScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button title="Back" onPress={() => navigation.pop()} />
    <Text>Search Query Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SearchQueryScreen;
