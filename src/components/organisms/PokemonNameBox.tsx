import React from 'react';
import { Pokemon, PokemonGender } from '../../models/pokemon';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { indigo, pink } from '@mui/material/colors';

export interface PokemonNameBoxProps {
    pokemon: Pokemon;
    sx: SxProps<Theme>;
}

export const PokemonNameBox: React.FC<PokemonNameBoxProps> = (props) => {
    return (
        <Box sx={{
            ...props.sx,
            bgcolor: "#FCF3E4",
            borderRadius: 2,
        }}>
        {PokemonName(props.pokemon, {
            ml: 2
        })}
        </Box>
    );
}

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
};

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
