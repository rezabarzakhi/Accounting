import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Box, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";

function Navbar({changeTheme , currentTheme}) {
  return (
    <AppBar color="default">
      <Toolbar className="flex w-full justify-between  gap-6  py-8 px-14  ">
        <Box className="flex gap-2">
          <LocalMallIcon />
          <div>{"Accounting"}</div>
        </Box>
        <Box>
          <IconButton
            onClick={()=>changeTheme()}
            className=" w-10 ">
            {currentTheme == "dark" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
