import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

const PrevSearchesList = ({ prevQueries, handleQuerySubmit }) => {
  const a = '';

  return (
    <View>
      <View style={styles.lastHeadContainer}>
        <Text style={styles.lastHead}>Last Search</Text>
      </View>
      {prevQueries.map((query, index) => (
        <View key={query} style={styles.prevItem}>
          <TouchableOpacity onPress={() => handleQuerySubmit(query)}>
            <Text style={styles.itemText}>
              {index + 1}
              {' - '}
              {query}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  lastHeadContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 15
  },
  lastHead: {
    fontSize: 16,
    fontFamily: 'roboto'
  },
  prevItem: {
    padding: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  itemText: {
    fontFamily: 'robotoLight',
    fontSize: 16
  }
});

export default PrevSearchesList;
