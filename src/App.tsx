import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EeveePage } from './components/pages/EeveePage';
import { useEevee } from './hooks/useEevee';
import createTheme from '@material-ui/core/styles/createTheme';
import { ThemeProvider } from '@material-ui/core';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a26742',
    },
  },
});

function App() {
  const eevee = useEevee();
  if (!eevee) {
    return <div>not found</div>
  }
  return (
    <ThemeProvider theme={theme}>
      <EeveePage pokemons={[eevee].concat(eevee.evolutions)}>
        <Box>
          <Box sx={{
            mt: 2,
            ml: 2,
            mr: 2,
            height: 375,
            justifyContent: "center",
            display: "flex"
          }}>
            <Box sx={{
              maxWidth: 1000,
              width: 1000,
              height: 375,
              borderRadius: 1,
              bgcolor: "#00F",
            }}></Box>
          </Box>
          <Box sx={{
            mt: 2,
            bgcolor: "#d0d",
          }} />
          <Box display="flex" sx={{
            height: 200,
          }}>
            <Box flexGrow={1} sx={{
              ml: 2,
              bgcolor: "#dd0",
              borderRadius: 1
            }} />
            <Box flexGrow={1} sx={{
              mr: 2, ml: 2,
              bgcolor: "#dd0",
              borderRadius: 1
            }} />
            <Box flexGrow={1} sx={{
              mr: 2,
              bgcolor: "#0dd",
              borderRadius: 1
            }} />
          </Box>
        </Box>
      </EeveePage>
    </ThemeProvider>
  );
}

export default App;
