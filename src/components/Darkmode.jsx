import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Darkmode = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <DarkModeSwitch
      style={{ marginBottom: '0', marginTop: '10px', marginLeft: '5px' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
};

export default Darkmode;
