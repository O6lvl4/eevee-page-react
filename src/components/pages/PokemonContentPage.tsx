import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { Pokemon } from '../../models/pokemon';
import { PokemonNameBox } from '../organisms/PokemonNameBox';
import { useParams } from 'react-router-dom';

const PokemonImage = (p: Pokemon, sx: SxProps<Theme>): JSX.Element => {
    // const imageGifURL = `https://projectpokemon.org/images/normal-sprite/${p.name.en.toLowerCase()}.gif`
    const imagePixelURL = `https://img.pokemondb.net/sprites/sword-shield/normal/${p.name.en.toLowerCase()}.png`;
    return (
        <Box component="img" sx={{
            ...sx,
            objectFit: "contain",
        }} src={imagePixelURL} />
    );
}

export interface PokemonContentPageProps {
    pokemons: Array<Pokemon>
}

export const PokemonContentPage: React.FC<PokemonContentPageProps> = (props) => {
    const params = useParams<{name: string}>();
    const p = props.pokemons.filter((p) => {
        return params.name === p.name.en.toLowerCase()
    })[0];
    return (
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
                        mt: -15,
                    }}>
                        {PokemonImage(p, {
                            width: 400,
                        })}
                    </Box>
                    <Box flexGrow={1} sx={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 2
                    }}>
                        <PokemonNameBox pokemon={p} sx={{
                            height: "60%",
                            width: "100%",
                        }} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                height: 20,
            }} />
        </Box>
    );
}
