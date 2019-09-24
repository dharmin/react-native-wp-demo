/* eslint-disable react/display-name */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const image = require('../../assets/images/a.jpg');

const NewsItem = (props) => {
  const {
    options,
    title,
    excerpt,
    featuredImage,
    setMainScrollPosition
  } = props;

  let MainAnimatedView;

  if (options.animated) {
    MainAnimatedView = ({ children }) => (
      <Animated.View style={options.style} {...options.panHandlers}>
        {children}
      </Animated.View>
    );
  } else {
    MainAnimatedView = ({ children }) => (
      <Animated.View>{children}</Animated.View>
    );
  }

  return (
    <MainAnimatedView>
      <View style={styles.newsContainer}>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => setMainScrollPosition(0)}>
            <Ionicons name="ios-arrow-round-back" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Image
            source={featuredImage ? { uri: featuredImage.sourceUrl } : image}
            style={{ flex: 1, resizeMode: 'cover', width }}
          />
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            padding: 20
          }}
        >
          <Text>{title}</Text>
          <Text>{excerpt.slice(0, 300)}</Text>
        </View>
      </View>
    </MainAnimatedView>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    flex: 1,
    position: 'absolute',
    height,
    width,
    backgroundColor: 'yellow'
  },
  btnContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 1,
    height: 30,
    width: 30,
    marginHorizontal: 15,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 1,
    overflow: 'hidden'
  }
});

export default NewsItem;
