/* eslint-disable global-require */
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  Animated,
  PanResponder
} from 'react-native';
import { withNavigation } from 'react-navigation';
import NewsItem from '../components/NewsList/NewsItem';

const { width, height } = Dimensions.get('window');

const images = [
  {
    id: 1,
    url: require('../assets/images/a.jpg')
  },
  {
    id: 2,
    url: require('../assets/images/b.jpg')
  },
  {
    id: 3,
    url: require('../assets/images/c.jpg')
  },
  {
    id: 4,
    url: require('../assets/images/d.jpg')
  },
  {
    id: 5,
    url: require('../assets/images/e.jpg')
  },
  {
    id: 6,
    url: require('../assets/images/f.jpg')
  },
  {
    id: 7,
    url: require('../assets/images/g.jpg')
  },
  {
    id: 8,
    url: require('../assets/images/h.jpg')
  },
  {
    id: 9,
    url: require('../assets/images/i.jpg')
  }
];

const NewsContainerScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useRef(new Animated.ValueXY());
  const swipedPosition = useRef(new Animated.ValueXY({ x: 0, y: -height }));

  console.log(navigation);
  console.log(navigation.getParam('categoryName'), 'category');

  const category = navigation.getParam('categoryName');

  if (!category) {
    // navigation.popToTop();
    // return;
  }

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

  return (
    <View style={styles.container}>
      {images
        .map((image, index) => {
          if (String(index) === String(currentIndex - 1)) {
            return (
              <NewsItem
                key={image.id}
                image={image}
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
                key={image.id}
                image={image}
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
              key={image.id}
              image={image}
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
