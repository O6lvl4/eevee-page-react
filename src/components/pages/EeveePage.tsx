import { Box, Toolbar } from "@material-ui/core";
import React from "react";
import { Pokemon } from "../../models/pokemon";
import { SideMenu } from "../organisms/SideMenu";
import { TopBar } from '../organisms/TopBar';

export const EeveePage: React.FC<{
  pokemons: Array<Pokemon>
}> = (props) => {

  return (
    <Box display="flex">
      <TopBar />
      <SideMenu pokemons={props.pokemons} currentPath={location.pathname} />
      <Box flexGrow={1}>
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
};