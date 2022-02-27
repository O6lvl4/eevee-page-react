import React from "react";
import { Drawer, Toolbar, Theme, useMediaQuery, useTheme } from "@mui/material";
import { Pokemon } from "../../models/pokemon";
import { MenuList } from "../molecules/MenuList";


export interface SideMenuProps {
  currentPath: string;
  pokemons: Array<Pokemon>;
}

export const SideMenu: React.FC<SideMenuProps> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery<Theme>(theme.breakpoints.down('sm'));
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      PaperProps={{

      }}
      style={{
        width: isMobile ? 80 : 240,
        flexShrink: 0,
      }}
      open
    >
      <Toolbar />
      <MenuList width={isMobile ? 80 : 240} items={props.pokemons.map((pokemon) => {
        return {
          key: pokemon.name.en,
          name: isMobile ? "" : pokemon.name.en,
          iconURL: "https://img.pokemondb.net/sprites/sword-shield/icon/" + pokemon.name.en.toLowerCase() + ".png"
        }
      })} />
    </Drawer>
  );
};
