import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import axios from "axios";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",

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
  const [openPositions, setOpenPositions] = useState([]);


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


      // Set and reduce openPositions array

      let assetList = [];
      let positionRows = [];

      function createRow(asset, qty, initialPrice, currentPrice) {
        const totalInvested = qty * initialPrice;
        const pnl = (currentPrice - initialPrice) * qty;
        const percent = (pnl / totalInvested) * 100;
        return {
          asset,
          qty,
          initialPrice,
          currentPrice,
          totalInvested,
          pnl,
          percent,
        };
      }
      
  
      investments.map((investment) => {
        if (!assetList.includes(investment.asset)) {
          assetList.push(investment.asset);
          positionRows.push(
            createRow(
              investment.asset,
              investment.quantity,
              investment.price,
              Math.random() * 50
            )
            );
        }
        // loop trough positions array, match with investment table asset, and sum the quantity and the avg price.
  
        positionRows.map((position) => {
          if (position.asset == investment.asset) {
            if(investment.operationType.toUpperCase() === 'BUY'){
              position.qty += investment.quantity;
            } 
            if(investment.operationType.toUpperCase() === 'SELL'){
              position.qty -= investment.quantity;
            } 
           
          }
        });
        
      });
  
      setOpenPositions(positionRows);
      console.log('1change');  
      console.log(openPositions);

      
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
            openPositions={openPositions}
            keyNames = {keyNames}
            theme={theme}
          />
      </ThemeProvider>
    </div>
  );
}

export default App;
