import React from 'react';
import './App.css';
import { EeveePage } from './components/pages/EeveePage';
import { useEevee } from './hooks/useEevee';
import createTheme from '@material-ui/core/styles/createTheme';
import { ThemeProvider } from '@material-ui/core';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { Pokemon, PokemonGender } from './models/pokemon'

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
  const p = pokemons[3];
  return (
    <ThemeProvider theme={theme}>
      <EeveePage pokemons={pokemons}>
        <Box>
          <Box sx={{
            height: 375,
            justifyContent: "center",
            display: "flex",
          }}>
            <Box sx={{
              maxWidth: 1000,
              width: 1000,
              display: "flex",
              justifyContent: "center",
            }}>
              <Box flexGrow={1} sx={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
              }}>
                {PokemonImage(p, {
                  marginBottom: 10,
                })}
              </Box>
              <Box flexGrow={1} sx={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2
              }}>
                {PokemonNameBox(p, {
                  height: "60%",
                  width: "100%",
                })}
              </Box>
            </Box>
          </Box>
          <Box sx={{
            height: 20,
          }} />
        </Box>
      </EeveePage>
    </ThemeProvider>
  );
}

// Atoms

import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { indigo, pink } from '@mui/material/colors';
const GenderSymbol = (gender: PokemonGender): JSX.Element => {
  switch(gender) {
    case PokemonGender.MALE:
      return <MaleIcon key={gender} sx={{
        color: indigo[500],
        fontSize: "inherit",
      }} />;
    case PokemonGender.FEMALE:
      return <FemaleIcon key={gender} sx={{
        color: pink[500],
        fontSize: "inherit",
      }} />;
  }
}

const PokemonImage = (p: Pokemon, sx: SxProps<Theme>): JSX.Element => {
  const imageURL = `https://img.pokemondb.net/sprites/sword-shield/normal/${p.name.en.toLowerCase()}.png`;
  return (
    <Box component="img" sx={sx} src={imageURL} />
  );
}

// Molecules

const PokemonName = (p: Pokemon, sx: SxProps<Theme>): JSX.Element => {
  return (
    <Box sx={sx}>
      <Typography sx={{
        mt: 2,
        fontWeight: "bold"
      }} variant="body1">
        No.{p.globalPokedexNumber}<br />
      </Typography>
      <Typography sx={{
        fontWeight: "bold"
      }} variant="h5">
        {p.name.en}<br />
        {p.name.jp} ({p.name.romajiNotation})<br />
      </Typography>
      <Box sx={{
        mt: 1
      }} />
      <Typography sx={{
        fontWeight: "bold"
      }} variant="body2">
        Height: {p.height('en')}<br />
        Weight: {p.weight('en')}
      </Typography>
      <Box sx={{
        mt: 2
      }} />
      <Box display="flex" sx={{
        fontSize: 40
      }}>
        {p.genderPatterns.map((pattern) => {
          return GenderSymbol(pattern)
        })}
      </Box>
    </Box>
  );
}

const PokemonNameBox = (p: Pokemon, sx: SxProps<Theme>): JSX.Element => {
  return (
    <Box sx={{
      ...sx,
      bgcolor: "#FCF3E4",
      borderRadius: 2,
    }}>
      {PokemonName(p, {
        ml: 2
      })}
    </Box>
  );
}

export default App;
