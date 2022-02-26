import React from 'react';
import './App.css';
import { EeveePage } from './components/pages/EeveePage';
import { useEevee } from './hooks/useEevee';
import createTheme from '@material-ui/core/styles/createTheme';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes, Navigate, useMatch } from 'react-router-dom';
import { PokemonContentPage } from './components/pages/PokemonContentPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a26742',
    },
    error: {
      main: '#f00'
    },
  },
});

function App() {
  const eevee = useEevee();
  if (!eevee) {
    return <div>not found</div>
  }
  const pokemons = [eevee].concat(eevee.evolutions);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/eevees/:name" element={
            <EeveePage pokemons={pokemons}>
              <PokemonContentPage pokemons={pokemons} />
            </EeveePage>
          }>
          </Route>
          <Route path="/" element={
            <Navigate to="/eevees/eevee"></Navigate>
          }></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
  
}

export default App;
