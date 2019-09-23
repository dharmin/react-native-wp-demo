import React, { createContext, useState, useContext } from 'react';

const NewsScreenLoaderContext = createContext();

export const NewsScreenLoaderContextProvider = ({ children }) => {
  const contextValue = useState(false);

  return (
    <NewsScreenLoaderContext.Provider value={contextValue}>
      {children}
    </NewsScreenLoaderContext.Provider>
  );
};

const useNewsScreenLoaderContext = () => useContext(NewsScreenLoaderContext);

export default useNewsScreenLoaderContext;
