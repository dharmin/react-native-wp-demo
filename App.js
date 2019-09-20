import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import store from './store';

import { MainHorizontalContextProvider } from './contexts/MainHorizontalContext';
import MainNavigation from './navigation/MainNavigation';
import client from './graphql/config';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MainHorizontalContextProvider>
          <MainNavigation />
          {/* <Main */}
        </MainHorizontalContextProvider>
      </Provider>
    </ApolloProvider>
  );
}
