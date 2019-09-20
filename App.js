import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { MainHorizontalContextProvider } from './contexts/MainHorizontalContext';
import MainNavigation from './navigation/MainNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <MainHorizontalContextProvider>
        <MainNavigation />
        {/* <Main */}
      </MainHorizontalContextProvider>
    </Provider>
  );
}
