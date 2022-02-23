import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pokemon } from '../models/pokemon';

export const useEevee = () => {
  const [eevee, setEevee] = useState<Pokemon>();
  useEffect(() => {
    (async () => {
      const baseURL = "https://raw.githubusercontent.com";
      const path = '/O6lvl4/pokemon-doc/main/example/133/eevee.json';
      const response = await axios.get<Pokemon>(baseURL + path);
      if (response.data) {
        setEevee(response.data);
      }
    })();
    return;
  }, []);
  return eevee;
};
