import React, { createContext, useState, useContext } from 'react';

const SearchedNewsListLoaderContext = createContext();

export const SearchedNewsListLoaderContextProvider = ({ children }) => {
  const contextValue = useState(false);

  return (
    <SearchedNewsListLoaderContext.Provider value={contextValue}>
      {children}
    </SearchedNewsListLoaderContext.Provider>
  );
};

const useSearchedNewsListLoaderContext = () => useContext(SearchedNewsListLoaderContext);

export default useSearchedNewsListLoaderContext;
