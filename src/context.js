import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = function ({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const openSidebar = function () {
    setIsSidebarOpen(true);
  };

  const closeSidebar = function () {
    setIsSidebarOpen(false);
  };

  const openSubmenu = function (text, coords) {
    const page = sublinks.find((p) => {
      return text === p.page;
    });

    setPage(page);
    setLocation(coords);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = function () {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};
