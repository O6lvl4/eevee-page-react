import React from 'react';
import { useEevee } from '../../hooks/useEevee';
import { Box } from '@mui/material';

export const EeveePage = () => {
    const eevee = useEevee();
    return (
        <Box>
            {eevee?.name.jp ?? "None"}
        </Box>
    );
};
