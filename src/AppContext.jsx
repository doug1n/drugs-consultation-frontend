import React, { createContext, useState } from 'react';

export const AppContext = createContext({
  currentPage: 0,
  setCurrentPage: () => {},
});

export function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
}
