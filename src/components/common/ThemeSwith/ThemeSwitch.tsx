import React, { useState } from 'react';

export interface Props {
  isDarkMode: boolean;
}

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const text = isDarkMode ? 'Dark Mode' : 'Light Mode';
  return (
    <button onClick={() => setIsDarkMode((isDark) => !isDark)}>{text}</button>
  );
};

export default React.memo(ThemeSwitch);
