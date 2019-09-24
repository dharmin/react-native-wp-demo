import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import colors from '../../constants/colors';
import { changeCurrentCategory } from '../../store/actions/categories.actions';
import useNewsScreenLoaderContext from '../../contexts/NewsScreenLoaderContext';
import getPostsByCategory from '../../graphql/queries/postsByCategory';
import client from '../../graphql/config';
import { setPosts } from '../../store/actions/common.actions';

const { width } = Dimensions.get('window');

const Category = ({ title, setMainScrollPosition, id }) => {
  const dispatch = useDispatch();
  const [, setIsLoading] = useNewsScreenLoaderContext();

  const setCategory = () => {
    dispatch(changeCurrentCategory(id))
      .then(() => Promise.resolve(setIsLoading(true)))
      .then(() => Promise.resolve(setMainScrollPosition(width)))
      .then(async () => {
        const { data } = await client.query({
          query: getPostsByCategory,
          variables: { categoryId: id }
        });

        return dispatch(setPosts(data));
      })
      .then(() => setIsLoading(false));
  };

  return (
    <TouchableOpacity onPress={setCategory}>
      <View style={styles.container}>
        <Ionicons name="md-bookmark" size={40} color={colors.highlight} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
