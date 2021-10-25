import React, { createContext, useState } from 'react';

export const AppContext = createContext({
  currentPage: 0,
  setCurrentPage: () => {},
  showSearchBox: true,
  setShowSearchBox: () => {},
  showBottomNavigation: true,
  setShowBottomNavigation: () => {},
  currentDrugData: {},
  setCurrentDrugData: () => {},
  currentAtc: [],
  setCurrentAtc: () => {},
});

export function AppProvider({ children }) {
  const [showSearchBox, setShowSearchBox] = useState(true);
  const [showBottomNavigation, setShowBottomNavigation] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);
  const [currentDrugData, setCurrentDrugData] = useState({});
  const [currentAtc, setCurrentAtc] = useState([]);

  const handleSetCurrentPage = (newPage) => {
    setPreviousPage(currentPage);
    setCurrentPage(newPage);
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage: handleSetCurrentPage,
        showSearchBox,
        setShowSearchBox,
        showBottomNavigation,
        setShowBottomNavigation,
        previousPage,
        currentDrugData,
        setCurrentDrugData,
        currentAtc,
        setCurrentAtc,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
