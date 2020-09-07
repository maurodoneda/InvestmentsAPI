import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Switch } from "@material-ui/core";
import SideDrawer from "./components/SideDrawer";
import { purple } from "@material-ui/core/colors";

function App({ theme }) {
  const [darkMode, setDarkMode] = useState(true);

  theme = createMuiTheme({
    palette: {
      type: darkMode ? "light" : "dark",

      primary: {
        main: "#283593",
        contrastText: "#fff",
        light: '#000',
        dark: '#002884',
      },
      secondary: {
        main: '#aeea00',
        contrastText: '#000',
        light: '#ff7961',
        dark: '#ba000d',
      },
    },
   

  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar position="fixed" theme={theme} setDarkMode={setDarkMode} darkMode={darkMode}/>
        <SideDrawer />
      </ThemeProvider>
    </div>
  );
}

export default App;
