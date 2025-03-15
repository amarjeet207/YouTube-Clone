import React, { createContext, useState, useContext } from 'react';

// Create the context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <AppContext.Provider value={{ toggleMenu, setToggleMenu, isSignIn, setIsSignIn }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};
