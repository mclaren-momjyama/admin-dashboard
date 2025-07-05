import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => {
  const palette =
    mode === 'light'
      ? {
          mode: 'light',
          primary: {
            main: '#1976d2',
          },
          background: {
            default: '#f4f6f8', 
            paper: '#ffffff',  
          },
          text: {
            primary: '#212121',
            secondary: '#5f6368',
          },
        }
      : {
          mode: 'dark',
          primary: {
            main: '#90caf9', 
          },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#e0e0e0',
            secondary: '#b0b0b0',
          },
        };

  return createTheme({
    palette,
    typography: {
      fontFamily: 'Inter, Roboto, sans-serif',
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
          },
        },
      },
      MuiDataGrid: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            fontSize: '0.95rem',
          },
          columnHeaders: {
            fontWeight: 'bold',
          },
        },
      },
    },
  });
};
