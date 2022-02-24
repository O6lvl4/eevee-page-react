import React from "react";
import { AppBar, Typography, Toolbar, useTheme } from "@material-ui/core";

// export interface TopBarProps {
//   // onClickMenu: () => void;
// }
export const TopBar: React.FC = () => {
  const theme = useTheme();
  const zIndex = theme.zIndex.drawer + 1;
  return (
    <AppBar position="fixed" style={{ zIndex }} color="primary">
      <Toolbar>
        <Typography variant="h6">Eevee Book</Typography>
      </Toolbar>
    </AppBar>
  );
};
