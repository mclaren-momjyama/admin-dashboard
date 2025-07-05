import './App.css';
import AdminTable from './Components/AdminTable.js';
import { useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { getTheme } from './theme';

export default function App() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminTable toggleTheme={toggleTheme} mode={mode} />
    </ThemeProvider>
  );
}
