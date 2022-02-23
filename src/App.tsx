import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EeveePage } from './components/pages/EeveePage';
import { useEevee } from './hooks/useEevee';

function App() {
  const eevee = useEevee();
  if (!eevee) {
    return <div>not found</div>
  }
  return (
    <EeveePage pokemons={[eevee].concat(eevee.evolutions)} />
  );
}

export default App;
