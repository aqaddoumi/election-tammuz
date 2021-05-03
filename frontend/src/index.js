import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { StylesProvider, ThemeProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
import CssBaseline from '@material-ui/core/CssBaseline';
import rtl from 'jss-rtl';

import './App.css';
import App from './App';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#424987',
    },
  },
  typography: {
    fontFamily: 'Noto Sans Kufi Arabic, Roboto, sans-serif',
    fontWeightRegular: 700,
  },
});

ReactDOM.render(
  <StylesProvider jss={jss}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StylesProvider>,
  document.getElementById('root')
);


