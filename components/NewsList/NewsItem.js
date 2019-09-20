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

const NewsItem = ({ image, options }) => {
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
    <MainAnimatedView key={image.id}>
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
            padding: 20
          }}
        >
          <Text>
            Apple ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            debitis ipsa deserunt nulla accusantium eaque eos minus, quos sed
            dignissimos commodi sunt nesciunt molestias, recusandae corrupti
            quidem excepturi ullam soluta?
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
    backgroundColor: 'yellow'
  }
});

export default NewsItem;
