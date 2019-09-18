import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SubHeaderTitle from '../Text/SubHeaderTitle';
import Topic from './Topic';

const data = [
  'India',
  'Article 370',
  'Business',
  'India',
  'Article 370',
  'Business',
  'India',
  'Article 370',
  'Business',
  'India',
  'Article 370',
  'Business',
  'India',
  'Article 370',
  'Business'
];

const Topics = () => {
  const renderItem = ({ item }) => <Topic title={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <SubHeaderTitle>SUGGESTED TOPICS</SubHeaderTitle>
      </View>
      <FlatList
        data={data}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item, id) => id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 35,
    width: '100%',
    alignItems: 'center'
  },
  titleContainer: {
    width: '80%'
  },
  list: {
    justifyContent: 'space-between',
    marginVertical: 25
  }
});

export default Topics;
