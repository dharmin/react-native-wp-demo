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
// import HTML from 'react-native-render-html';
import { WebView } from 'react-native-webview';
import colors from '../../constants/colors';
import BackButton from '../Buttons/BackButton';

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
        <BackButton setMainScrollPosition={setMainScrollPosition} />
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
          <Text style={styles.title}>{title}</Text>
          {/* <Text style={styles.content}>{excerpt.slice(0, 300)}</Text> */}

          {/* <WebView originWhitelist={['*']} source={'<h1>Hello World</h1>'} /> */}
          <Text style={styles.content}>
            {excerpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 400)}
          </Text>
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
    backgroundColor: colors.lightBg
  },
  title: {
    fontFamily: 'roboto',
    fontSize: 22,
    marginVertical: 5
  },
  content: {
    fontFamily: 'robotoLight',
    fontSize: 16,
    lineHeight: 25
  }
});

export default NewsItem;
