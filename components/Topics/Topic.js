import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../constants/colors';
import useNewsScreenLoaderContext from '../../contexts/NewsScreenLoaderContext';
import { changeCurrentTag } from '../../store/actions/tags.action';
import client from '../../graphql/config';
import getPostsByTag from '../../graphql/queries/postsByTag';
import { setPosts } from '../../store/actions/common.actions';

const { width } = Dimensions.get('window');

const Topic = ({ title, id, setMainScrollPosition }) => {
  const dispatch = useDispatch();
  const [, setIsLoading] = useNewsScreenLoaderContext();
  const currentTopic = useSelector(state => state.tags.currentTag);
  const setCurrentTopic = () => {
    if (currentTopic === id) return;

    dispatch(changeCurrentTag(id))
      .then(() => Promise.resolve(setIsLoading(true)))
      .then(() => Promise.resolve(setMainScrollPosition(width)))
      .then(async () => {
        const { data } = await client.query({
          query: getPostsByTag,
          variables: { tagId: id }
        });

        return dispatch(setPosts(data, true));
      })
      .then(() => setIsLoading(false));
  };

  return (
    <TouchableOpacity onPress={setCurrentTopic}>
      <View style={styles.topicContainer}>
        <Ionicons name="ios-globe" size={60} color={colors.highlight} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  topicContainer: {
    height: 120,
    width: 90,
    maxWidth: 100,
    padding: 7,
    borderColor: colors.highlight,
    borderWidth: 1,
    borderRadius: 3,
    alignItems: 'center',
    margin: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  text: {
    color: colors.lightBg,
    fontSize: 11
  }
});

export default Topic;
