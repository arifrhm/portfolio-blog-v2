// ThemeContext.js
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { darkDefaultTheme, lightDefaultTheme, Theme } from '@blocknote/mantine';

// Define themes
const lightTheme: Theme = {
  colors: {
    editor: {
      text: '#222222',
      background: '#ffffff',
    },
    menu: {
      text: '#000000',
      background: '#f0f0f0',
    },
    tooltip: {
      text: '#000000',
      background: '#e0e0e0',
    },
    hovered: {
      text: '#000000',
      background: '#d0d0d0',
    },
    selected: {
      text: '#000000',
      background: '#c0c0c0',
    },
    disabled: {
      text: '#b0b0b0',
      background: '#e0e0e0',
    },
    shadow: '#cccccc',
    border: '#dddddd',
    sideMenu: '#f0f0f0',
    highlights: lightDefaultTheme.colors!.highlights,
  },
  borderRadius: 4,
  fontFamily: 'Helvetica Neue, sans-serif',
};

const darkTheme: Theme = {
  colors: {
    editor: {
      text: '#ffffff',
      background: '#333333',
    },
    menu: {
      text: '#ffffff',
      background: '#444444',
    },
    tooltip: {
      text: '#ffffff',
      background: '#555555',
    },
    hovered: {
      text: '#ffffff',
      background: '#666666',
    },
    selected: {
      text: '#ffffff',
      background: '#777777',
    },
    disabled: {
      text: '#888888',
      background: '#444444',
    },
    shadow: '#222222',
    border: '#333333',
    sideMenu: '#444444',
    highlights: darkDefaultTheme.colors!.highlights,
  },
  borderRadius: 4,
  fontFamily: 'Helvetica Neue, sans-serif',
};

// Create context
const ThemeContext = createContext<{
  isDarkMode: boolean;
  toggleTheme: () => void;
}>({
  isDarkMode: false,
  toggleTheme: () => {},
});

// Create provider
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
