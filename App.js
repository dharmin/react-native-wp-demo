/* eslint-disable global-require */
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import store from './store';

import { MainHorizontalContextProvider } from './contexts/MainHorizontalContext';
import MainNavigation from './navigation/MainNavigation';
import client from './graphql/config';
import { NewsScreenLoaderContextProvider } from './contexts/NewsScreenLoaderContext';

const loadFonts = () => Font.loadAsync({
  roboto: require('./assets/fonts/Roboto-Regular.ttf'),
  robotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
  robotoLight: require('./assets/fonts/Roboto-Light.ttf'),
  robotoThin: require('./assets/fonts/Roboto-Thin.ttf')
});

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setIsLoaded(true)} />
    );
  }

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MainHorizontalContextProvider>
          <NewsScreenLoaderContextProvider>
            <MainNavigation />
          </NewsScreenLoaderContextProvider>
          {/* <Main */}
        </MainHorizontalContextProvider>
      </Provider>
    </ApolloProvider>
  );
}
