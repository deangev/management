import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export type CoreThemeProps = {
  children: ReactNode;
};

const Theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#FF9800',
      dark: '#ED6C02',
      light: '#ffe6c8',
      contrastText: '#fff7ef',
    },
    secondary: {
      main: '#666',
      dark: '#888',
      light: '#ccc',
      contrastText: '#eee',
    },
    background: {
      default: '#FCFAF8',
    },
    info: {
      main: '#0063D8',
      light: '#0075ff',
      dark: '#000',
      contrastText: '#525252',
    },
    text: {
      primary: '#000',
      secondary: '#eee',
      disabled: '#b6b6b6',
    },
    divider: '#e2e2e2',
    success: {
      main: '#008B54',
    },
    error: {
      main: '#f00000',
      light: '#fff7f6',
      contrastText: '#ADADAD',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    warning: {
      main: '#ffc166',
      light: '#f9f9f9',
      contrastText: '#efefef',
    },
  },
  shadows: [
    'none',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    // In case you need other boxshadow settings, change the ones below and use
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 6px rgba(0, 0, 0, 0.25)',
  ],
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif;",
    fontWeightBold: 600,
    h1: {
      margin: '1.5rem 0',
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h2: {
      color: '#000',
    },
    button: {
      textTransform: 'none',
    },
    subtitle2: {
      fontWeight: 400,
    },
  },
});

export function ThemeProvider({ children }: CoreThemeProps): JSX.Element {
  return <MuiThemeProvider theme={Theme}>{children}</MuiThemeProvider>;
}

export default Theme;
