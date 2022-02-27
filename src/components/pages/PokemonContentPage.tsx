import React from 'react';
import { Box, Grid, SxProps, Theme, useMediaQuery, useTheme } from '@mui/material';
import { Pokemon } from '../../models/pokemon';
import { PokemonNameBox } from '../organisms/PokemonNameBox';
import { useParams } from 'react-router-dom';

const PokemonImage = (p: Pokemon, sx: SxProps<Theme>): JSX.Element => {
    // const imageGifURL = `https://projectpokemon.org/images/normal-sprite/${p.name.en.toLowerCase()}.gif`
    // const imagePixelURL = `https://img.pokemondb.net/sprites/x-y/normal//${p.name.en.toLowerCase()}.png`;
    const imagePixelURL = `../eevees/${p.name.en.toLowerCase()}.png`;
    return (
        <Box component="img" sx={{
            ...sx,
            objectFit: "contain",
            maxHeight: 300,
            minWidth: 200,
        }} src={imagePixelURL} />
    );
}
 
export interface PokemonContentPageProps {
    pokemons: Array<Pokemon>
}

export const PokemonContentPage: React.FC<PokemonContentPageProps> = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery<Theme>(theme.breakpoints.down('sm'));
    const params = useParams<{name: string}>();
    const pokemon = props.pokemons.filter(p => p.name.en.toLowerCase() === params.name)[0];
    if (!pokemon) {
        return (
            <Box>Not Found</Box>
        )
    }
    return (
        <Box>
            <Box sx={{
                height: "100%",
                justifyContent: "center",
                display: "flex",
            }}>
                <Box sx={{
                    maxWidth: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <Grid container spacing={0} sx={{
                        minHeight: "50vh"
                    }}>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: isMobile ? "center" : "center",
                            }}>
                                {PokemonImage(pokemon, {
                                    width: isMobile ? "300px" :"80%",
                                    mt: isMobile ? 5 : 10,
                                    maxWidth: 400,
                                })}
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "center",
                            }}>
                                <PokemonNameBox pokemon={pokemon} sx={{
                                    width: "100%",
                                    maxWidth: 400,
                                    mt: isMobile ? 0 : 10,
                                    mr: 2, ml: 2,
                                }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{
                height: 20,
            }} />
        </Box>
    );
}
