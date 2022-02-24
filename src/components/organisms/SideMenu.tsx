import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { Pokemon } from "../../models/pokemon";

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
      <List style={{ width: drawerWidth }}>
        {props.pokemons.map((pokemon) => {
          return (
            <ListItemButton key={pokemon.name.jp}>
              <ListItemIcon>
                <img width={40} height={40} src={"https://img.pokemondb.net/sprites/sword-shield/icon/" + pokemon.name.en.toLowerCase() + ".png"} />
              </ListItemIcon>
              <ListItemText primary={pokemon.name.en} />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
};
