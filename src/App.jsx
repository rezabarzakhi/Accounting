import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Components/Navbar/Navbar";
import Table from "./Components/Table/Table";




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
      setTheme((prev) => ({
        ...prev,
        palette: {
          mode: "dark",
        },
      }));
    } else {
      setTheme((prev) => ({
        ...prev,
        palette: {
          mode: "light",
        },
      }));
    }
  };

  const darkTheme = createTheme(theme);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main className="flex m-10">
      <Navbar changeTheme={changeTheme} currentTheme />
        <Table />
      </main>
    </ThemeProvider>
  );
}

export default App;
