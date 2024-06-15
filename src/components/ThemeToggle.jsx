import React, { useEffect } from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const savedColorMode = localStorage.getItem('chakra-ui-color-mode');
    if (savedColorMode) {
      if (savedColorMode !== colorMode) {
        toggleColorMode();
      }
    }
  }, [colorMode, toggleColorMode]);

  const handleToggle = () => {
    toggleColorMode();
    localStorage.setItem('chakra-ui-color-mode', colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={handleToggle}
      position="fixed"
      top="1rem"
      left="1rem"
    />
  );
};

export default ThemeToggle;
