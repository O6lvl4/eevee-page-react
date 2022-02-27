import React from 'react';
import { Box, Divider, Grid, SxProps, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Pokemon } from '../../models/pokemon';
import { PokemonNameBox } from '../organisms/PokemonNameBox';
import { useParams } from 'react-router-dom';

const PokemonImage = (p: Pokemon, sx: SxProps<Theme>): JSX.Element => {
    // const imageGifURL = `https://projectpokemon.org/images/normal-sprite/${p.name.en.toLowerCase()}.gif`
    // const imagePixelURL = `https://img.pokemondb.net/sprites/x-y/normal//${p.name.en.toLowerCase()}.png`;
    // const imagePixelURL = `../eevees/${p.name.en.toLowerCase()}.png`;
    const imagePixelURL = `https://img.pokemondb.net/sprites/sword-shield/normal//${p.name.en.toLowerCase()}.png`;
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
    const name = pokemon.name.en.toLowerCase();
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
                        <Grid item xs={12} sx={{
                            mt: 2,
                        }}>
                            <Divider sx={{
                                color: "#f0f",
                                ml: 1,
                                mr: 2,
                            }}></Divider>
                            <Box sx={{
                                ml: 2,
                                justifyContent: "center ",
                            }}>
                                <Typography variant="h4" sx={{
                                    mt: 1,
                                    ml: 1,
                                    fontWeight: "bold",
                                    color: "#111111AA",
                                }}>
                                    Generation 6 (XY)
                                </Typography>
                                <img width="200" src={`https://img.pokemondb.net/sprites/x-y/normal/${name}.png`} />
                                <img width="200" src={`https://img.pokemondb.net/sprites/x-y/shiny/${name}.png`} />
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
