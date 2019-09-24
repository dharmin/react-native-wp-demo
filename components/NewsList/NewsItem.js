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
import colors from '../../constants/colors';

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
          <TouchableOpacity
            onPress={() => setMainScrollPosition(0)}
            style={styles.btn}
          >
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
    backgroundColor: colors.lightBg,
    zIndex: 1,
    height: 45,
    width: 45,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 45 / 2,
    elevation: 1,
    overflow: 'hidden'
  },
  btn: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default NewsItem;
