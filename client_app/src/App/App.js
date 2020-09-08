import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Switch, List, Typography, Container } from "@material-ui/core";
import SideDrawer from "./components/SideDrawer";
import { purple } from "@material-ui/core/colors";
import axios from "axios";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "light" : "dark",

      primary: {
        main: "#283593",
        contrastText: "#fff",
        light: "#000",
        dark: "#002884",
      },
      secondary: {
        main: "#aeea00",
        contrastText: "#000",
        light: "#ff7961",
        dark: "#ba000d",
      },
    },
  });

  const [investments, setInvestments] = useState([]);
  const [keyNames, setKeyNames] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/investments").then((response) => {
      console.log(response.data);
      let investments = [];
      response.data.forEach((investment) => {
        investment.date = investment.date.split("T")[0];
        investments.push(investment);
      });
      setInvestments(investments);
      let keys = Object.getOwnPropertyNames(response.data[0]);
      setKeyNames(keys);
    });
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar
          position="fixed"
          theme={theme}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
          <Dashboard
            darkMode={darkMode}
            investments={investments}
            keyNames = {keyNames}
            theme={theme}
          />
      </ThemeProvider>
    </div>
  );
}

export default App;
