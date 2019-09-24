/* eslint-disable global-require */
import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
  Text
} from 'react-native';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import NewsItem from '../components/NewsList/NewsItem';

import MainLoader from '../components/Loaders/MainLoader';
import useNewsScreenLoaderContext from '../contexts/NewsScreenLoaderContext';
import colors from '../constants/colors';
import BackButton from '../components/Buttons/BackButton';

const { width, height } = Dimensions.get('window');

const NewsContainerScreen = React.memo(({ setMainScrollPosition }) => {
  const [isLoading] = useNewsScreenLoaderContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const news = useSelector(state => state.news.data);

  const position = useRef(new Animated.ValueXY());
  const swipedPosition = useRef(new Animated.ValueXY({ x: 0, y: -height }));

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gesture) => {
      if (gesture.dy < 0 && currentIndex === news.length - 1) {
        position.current.setValue({ x: 0, y: 0 });
        return;
      }

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
      if (gesture.dy < 0 && currentIndex === news.length - 1) {
        position.current.setValue({ x: 0, y: 0 });
        return;
      }

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

  if (isLoading) {
    return <MainLoader />;
  }

  return (
    <View style={styles.container}>
      {news.length ? (
        news
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
                  setMainScrollPosition={setMainScrollPosition}
                />
              );
            }
            if (index < currentIndex) {
              return;
            }
            if (index > news.length - 1) return;
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
                  setMainScrollPosition={setMainScrollPosition}
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
                setMainScrollPosition={setMainScrollPosition}
              />
            );
          })
          .reverse()
      ) : (
        <View style={{ flex: 1 }}>
          <BackButton setMainScrollPosition={setMainScrollPosition} />
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text>No News Found...</Text>
          </View>
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBg,
    width
  }
});

export default withNavigation(NewsContainerScreen);
