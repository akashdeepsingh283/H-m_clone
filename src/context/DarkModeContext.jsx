import React from 'react';

export const DarkModeContext = React.createContext();

const DarkProvider = (props) => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    if (checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const value = { isDarkMode, toggleDarkMode };

  return (
    <DarkModeContext.Provider value={value}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkProvider;
