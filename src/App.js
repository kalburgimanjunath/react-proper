import React, { useState } from 'react';
import './style.css';
import { ProviderAuth } from './components/navigation/Auth/ProviderAuth';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './components/navigation/RouterConfig';
import { ThemeProvider, Button, createTheme } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import { ThemeSwitch } from './components/ThemeSwitch';
export default function App() {
  const [darkState, setDarkState] = useState('dark');
  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.log('theme=', darkState ? 'dark' : 'light');
  };
  // const theme = createTheme({
  //   status: {
  //     danger: orange[500],
  //   },
  // });
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider>
          <ThemeSwitch
            darkState={darkState}
            handleThemeChange={handleThemeChange}
          />
          <ProviderAuth>
            <RouterConfig />
          </ProviderAuth>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
