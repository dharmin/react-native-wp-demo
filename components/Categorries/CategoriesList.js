import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import SubHeaderTitle from '../Text/SubHeaderTitle';
import Category from './Category';
import useMainHorizontalContext from '../../contexts/MainHorizontalContext';

const CategoriesList = ({ setMainScrollPosition }) => {
  // const [, setIsMainHorizontalScroll] = useMainHorizontalContext();

  // const startMainHorizontalScroll = () => setIsMainHorizontalScroll(true);

  // const stopMainHorizontalScroll = () => setIsMainHorizontalScroll(false);

  const categories = useSelector(state => state.categories.data);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <SubHeaderTitle>CATEGORIES</SubHeaderTitle>
      </View>
      <ScrollView>
        <Category
          title="All News"
          setMainScrollPosition={setMainScrollPosition}
        />
        {categories.map(({ node: { name, id, categoryId } }) => (
          <Category
            key={id}
            title={name}
            setMainScrollPosition={setMainScrollPosition}
            id={id}
          />
        ))}
      </ScrollView>
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
  list: {}
});

export default CategoriesList;
