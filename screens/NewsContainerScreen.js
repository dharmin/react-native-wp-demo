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

const NewsContainerScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useRef(new Animated.ValueXY());
  const swipedPosition = useRef(new Animated.ValueXY({ x: 0, y: -height }));

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gesture) => true,
    onPanResponderMove: (e, gesture) => {
      console.log(currentIndex);
      if (gesture.dy > 0 && currentIndex > 0) {
        console.log('in if');
        swipedPosition.current.setValue({
          x: 0,
          y: -height + gesture.dy
        });
      } else {
        console.log(gesture.dy, 'dy');
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

  // console.log(current);

  return (
    <View style={styles.container}>
      {images
        .map((image, index) => {
          if (String(index) === String(currentIndex - 1)) {
            // This is working fine
            console.log(true, 'previous slide');
            console.log(swipedPosition.current.getLayout(), 'layout position');
            return (
              <Animated.View
                key={image.id}
                style={swipedPosition.current.getLayout()}
                {...panResponder.panHandlers}
              >
                <View key={image.id} style={styles.newsContainer}>
                  <View style={{ flex: 2, alignItems: 'center' }}>
                    <Image
                      source={image.url}
                      style={{ flex: 1, resizeMode: 'cover', width }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 2,
                      alignItems: 'center',
                      // justifyContent: 'center',
                      padding: 20
                    }}
                  >
                    <Text>
                      Apple ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto debitis ipsa deserunt nulla accusantium eaque eos
                      minus, quos sed dignissimos commodi sunt nesciunt
                      molestias, recusandae corrupti quidem excepturi ullam
                      soluta?
                    </Text>
                  </View>
                </View>
              </Animated.View>
            );
          }
          if (index < currentIndex) {
            return;
          }
          if (index === currentIndex) {
            return (
              <Animated.View
                key={image.id}
                style={position.current.getLayout()}
                {...panResponder.panHandlers}
              >
                <View key={image.id} style={styles.newsContainer}>
                  <View style={{ flex: 2, alignItems: 'center' }}>
                    <Image
                      source={image.url}
                      style={{ flex: 1, resizeMode: 'cover', width }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 2,
                      alignItems: 'center',
                      // justifyContent: 'center',
                      padding: 20
                    }}
                  >
                    <Text>
                      Apple ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto debitis ipsa deserunt nulla accusantium eaque eos
                      minus, quos sed dignissimos commodi sunt nesciunt
                      molestias, recusandae corrupti quidem excepturi ullam
                      soluta?
                    </Text>
                  </View>
                </View>
              </Animated.View>
            );
          }
          return (
            <Animated.View key={image.id}>
              <View key={image.id} style={styles.newsContainer}>
                <View style={{ flex: 2, alignItems: 'center' }}>
                  <Image
                    source={image.url}
                    style={{ flex: 1, resizeMode: 'cover', width }}
                  />
                </View>
                <View
                  style={{
                    flex: 2,
                    alignItems: 'center',
                    // justifyContent: 'center',
                    padding: 20
                  }}
                >
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto debitis ipsa deserunt nulla accusantium eaque eos
                    minus, quos sed dignissimos commodi sunt nesciunt molestias,
                    recusandae corrupti quidem excepturi ullam soluta?
                  </Text>
                </View>
              </View>
            </Animated.View>
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

export default NewsContainerScreen;
