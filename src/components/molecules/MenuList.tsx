import React from "react";
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export interface MenuListProps {
    width: number
    items: Array<{
        key: string
        name: string
        iconURL: string
    }>
}

export const MenuList: React.FC<MenuListProps> = (props) => {
  const navigate = useNavigate();
  return (
    <List style={{ width: props.width }}>
    {props.items.map((item) => {
    return (
        <ListItemButton key={item.key} onClick={ () => {
          navigate('/eevees/' + item.name.toLowerCase());
        }}>
        <ListItemIcon>
            <img width={40} height={40} src={item.iconURL} />
        </ListItemIcon>
        <ListItemText primary={item.name} />
        </ListItemButton>
    );
    })}
    </List>
  );
};
