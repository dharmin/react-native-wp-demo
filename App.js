import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import store from './store';

import { MainHorizontalContextProvider } from './contexts/MainHorizontalContext';
import MainNavigation from './navigation/MainNavigation';
import client from './graphql/config';
import { NewsScreenLoaderContextProvider } from './contexts/NewsScreenLoaderContext';

export default function App() {
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
