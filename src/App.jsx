import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


function App() {
  const [theme, setTheme] = useState({
    palette: {
      mode: "dark",
    },
  });
  const currentTheme = theme.palette.mode;
  const changeTheme = () => {
    // console.log(theme.palette.mode);
    if (currentTheme == "light") {
      setTheme(prev => ({
        ...prev , 
        palette : {
          mode : "dark"
        }
      }));
    } else {
            setTheme(prev => ({
        ...prev , 
        palette : {
          mode : "light"
        }
      }));
    }
  };

  const darkTheme = createTheme(theme); 
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main onClick={changeTheme}>
        <IconButton >{currentTheme == "dark" ? (<DarkModeIcon/>) : (<LightModeIcon/>)}</IconButton>
      </main>
    </ThemeProvider>
  );
}

export default App;
