import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
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

const Topics = ({ setMainScrollPosition }) => {
  const topics = useSelector(state => state.tags.data);
  const renderItem = ({
    item: {
      node: { name, id }
    }
  }) => (
    <Topic title={name} id={id} setMainScrollPosition={setMainScrollPosition} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <SubHeaderTitle>SUGGESTED TOPICS</SubHeaderTitle>
      </View>
      <FlatList
        data={topics}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={item => item.node.id}
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
