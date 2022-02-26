import React from "react";
import { Drawer, Toolbar } from "@mui/material";
import { Pokemon } from "../../models/pokemon";
import { MenuList } from "../molecules/MenuList";

export interface SideMenuProps {
  currentPath: string;
  pokemons: Array<Pokemon>;
}

const drawerWidth = 240;

export const SideMenu: React.FC<SideMenuProps> = (props) => {
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      PaperProps={{

      }}
      style={{
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: "red",
      }}
      open
    >
      <Toolbar />
      <MenuList width={drawerWidth} items={props.pokemons.map((pokemon) => {
        return {
          key: pokemon.name.en,
          name: pokemon.name.en,
          iconURL: "https://img.pokemondb.net/sprites/sword-shield/icon/" + pokemon.name.en.toLowerCase() + ".png"
        }
      })} />
    </Drawer>
  );
};
