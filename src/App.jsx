import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Components/Navbar/Navbar";
import Table from "./Components/Table/Table";

function App() {
  // State for language
  const [language, setLanguage] = useState("fa");

  // Function to toggle language
  const changeLanguage = () => {
    setLanguage(language === "fa" ? "en" : "fa");
  };

  // State for theme
  const [theme, setTheme] = useState({
    palette: {
      mode: "dark",
    },
  });

  // Function to toggle theme
  const changeTheme = () => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      palette: {
        mode: prevTheme.palette.mode === "light" ? "dark" : "light",
      },
    }));
  };

  // Create a theme based on the current state
  const darkTheme = createTheme(theme);

  useEffect(() => {
    console.log("hi");
  }, [language, theme]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main
        className="flex m-10"
        dir={language === "fa" ? "rtl" : "ltr"}>
        <Navbar
          changeTheme={changeTheme}
          theme={theme}
          changeLanguage={changeLanguage}
          language={language}
        />
        <Table language={language} />
      </main>
    </ThemeProvider>
  );
}

export default App;
