/* eslint-disable react/display-name */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const image = require('../../assets/images/a.jpg');

const NewsItem = (props) => {
  const {
    options, title, excerpt, featuredImage
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
  }
});

export default NewsItem;
