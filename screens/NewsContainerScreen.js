/* eslint-disable global-require */
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { useLazyQuery } from '@apollo/react-hooks';
import NewsItem from '../components/NewsList/NewsItem';
import getPostsByCategory from '../graphql/queries/postsByCategory';
import { setPosts } from '../store/actions/common.actions';
import MainLoader from '../components/Loaders/MainLoader';

const { width, height } = Dimensions.get('window');

const NewsContainerScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [getPosts, { loading, data }] = useLazyQuery(getPostsByCategory);
  const [currentIndex, setCurrentIndex] = useState(0);
  const news = useSelector(state => state.news.data);
  const currentCategory = useSelector(
    state => state.categories.currentCategory
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
      return;
    }

    if (currentCategory) {
      // TODO:
      // GET DATA ACCORDING TO CATEGORIES OR TOPICS
      getPosts({
        variables: {
          categoryId: currentCategory
        }
      });
    }

    if (!loading && data) {
      dispatch(setPosts(data)).then(() => setIsLoading(false));
    }
  }, [currentCategory, data, dispatch, getPosts, loading]);

  const position = useRef(new Animated.ValueXY());
  const swipedPosition = useRef(new Animated.ValueXY({ x: 0, y: -height }));

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gesture) => {
      if (gesture.dy > 0 && currentIndex > 0) {
        swipedPosition.current.setValue({
          x: 0,
          y: -height + gesture.dy
        });
      } else {
        position.current.setValue({ x: 0, y: gesture.dy });
      }
    },
    onPanResponderRelease: (e, gesture) => {
      if (currentIndex > 0 && gesture.dy > 50 && gesture.vy > 0.7) {
        Animated.timing(swipedPosition.current, {
          toValue: { x: 0, y: 0 },
          duration: 400
        }).start(() => {
          setCurrentIndex(state => state - 1);
          swipedPosition.current.setValue({ x: 0, y: -height });
        });
      } else if (-gesture.dy > 50 && -gesture.vy > 0.7) {
        Animated.timing(position.current, {
          toValue: { x: 0, y: -height },
          duration: 400
        }).start(() => {
          setCurrentIndex(state => state + 1);
          position.current.setValue({ x: 0, y: 0 });
        });
      } else {
        Animated.parallel([
          Animated.spring(position.current, {
            toValue: { x: 0, y: 0 }
          }),
          Animated.spring(swipedPosition.current, {
            toValue: { x: 0, y: -height }
          })
        ]).start();
      }
    }
  });

  return isLoading ? (
    <MainLoader />
  ) : (
    <View style={styles.container}>
      {news
        .map((item, index) => {
          const node = item.node || { ...item };

          if (String(index) === String(currentIndex - 1)) {
            return (
              <NewsItem
                key={node.postId}
                {...node}
                options={{
                  animated: true,
                  style: swipedPosition.current.getLayout(),
                  panHandlers: panResponder.panHandlers
                }}
              />
            );
          }
          if (index < currentIndex) {
            return;
          }
          if (index === currentIndex) {
            return (
              <NewsItem
                key={node.postId}
                {...node}
                options={{
                  animated: true,
                  style: position.current.getLayout(),
                  panHandlers: panResponder.panHandlers
                }}
              />
            );
          }
          return (
            <NewsItem
              key={node.postId}
              {...node}
              options={{
                animated: false
              }}
            />
          );
        })
        .reverse()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    width
  },
  newsContainer: {
    flex: 1,
    position: 'absolute',
    height,
    width,
    backgroundColor: 'yellow'
  }
});

export default withNavigation(NewsContainerScreen);
