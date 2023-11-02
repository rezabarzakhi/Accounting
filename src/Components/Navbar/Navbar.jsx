import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Box, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useEffect } from "react";

function Navbar({ changeTheme, theme, changeLanguage, language }) {
  console.log(language);
  return (
    <AppBar color="default">
      <Toolbar className="flex w-full justify-between  gap-6  py-8 px-14  ">
        <Box className="flex gap-2">
          <LocalMallIcon />
          <div>{language === "fa" ? "فاکتور ساز" : "Factor Maker"}</div>
        </Box>
        <Box>
          <IconButton
            onClick={() => changeTheme()}
            className=" w-10 ">
            {theme.palette.mode == "dark" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <Button
            onClick={() => changeLanguage()}
            className="  ">
            {language === "fa" ? "فا" : "en"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
