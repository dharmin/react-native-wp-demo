import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { MainHorizontalContextProvider } from './contexts/MainHorizontalContext';
import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <Provider store={store}>
      <MainHorizontalContextProvider>
        <MainScreen />
      </MainHorizontalContextProvider>
    </Provider>
  );
}
