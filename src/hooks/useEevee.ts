import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pokemon, PokemonResponse } from '../models/pokemon';

export const useEevee = () => {
  const [eevee, setEevee] = useState<Pokemon>();
  useEffect(() => {
    (async () => {
      const baseURL = "https://raw.githubusercontent.com";
      const path = '/O6lvl4/pokemon-doc/main/example/133/eevee.json';
      const response = await axios.get<PokemonResponse>(baseURL + path);
      if (response.data) {
        console.log(response.data)
        setEevee(new Pokemon(response.data));
      }
    })();
    return;
  }, []);
  return eevee;
};
