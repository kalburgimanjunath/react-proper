import { Switch, Button } from '@material-ui/core';
import React from 'react';
export const ThemeSwitch = ({ darkState, handleThemeChange }) => {
  return (
    <div>
      <Switch checked={darkState} onChange={handleThemeChange} />
      <Button variant="contained" color="primary">
        Test Theme
      </Button>
    </div>
  );
};
