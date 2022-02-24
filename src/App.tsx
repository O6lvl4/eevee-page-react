import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EeveePage } from './components/pages/EeveePage';
import { useEevee } from './hooks/useEevee';
import createTheme from '@material-ui/core/styles/createTheme';
import { ThemeProvider } from '@material-ui/core';

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
        てすと
      </EeveePage>
    </ThemeProvider>
  );
}

export default App;
