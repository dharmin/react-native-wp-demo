import React, { createContext, useState, useContext } from 'react';

const MainHorizontalContext = createContext();

export const MainHorizontalContextProvider = ({ children }) => {
  const contextValue = useState(true);

  return (
    <MainHorizontalContext.Provider value={contextValue}>
      {children}
    </MainHorizontalContext.Provider>
  );
};

const useMainHorizontalContext = () => useContext(MainHorizontalContext);

export default useMainHorizontalContext;
