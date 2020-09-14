import React, { useState } from "react";
import InvestmentTable from "./InvestmentTable";
import { makeStyles } from "@material-ui/core/styles";
import SideDrawer from "./SideDrawer";
import OpenPositions from "./OpenPositions";
import Grid from "@material-ui/core/Grid";
import DoughnutChart from "./DoughnutChart";
import EvolutionChart from "./EvolutionChart";

const useStyles = makeStyles((theme)=>({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    marginLeft: 245,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  gridItem:{
    minWidth: 300
  },

  evolutionChart:{
    minWidth: 420

  },

}));

export default function Dashboard({ darkMode, keyNames, investments, theme, openPositions }) {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);

  return (
    <div className={classes.content}>
      <SideDrawer setToggle={setToggle} toggle={toggle} />
      <Grid container spacing={2}>
      
      <Grid className={classes.gridItem} item xs={3}>
        <DoughnutChart/>
        </Grid>

        <Grid className={classes.evolutionChart} item item xs={3}>
        <EvolutionChart theme={theme} darkMode ={darkMode}/>
        </Grid>

        <Grid className={classes.gridItem} item xs={5}>
        <OpenPositions
          darkMode={darkMode}
          keyNames={keyNames}
          investments={investments}
        />
        </Grid>
        <Grid className={classes.gridItem} item xs={11}>
        {toggle ? (
          <InvestmentTable
            darkMode={darkMode}
            keyNames={keyNames}
            investments={investments}
          />
        ) : null}
        </Grid>
       

        <Grid className={classes.gridItem} item xs={7}>
        <OpenPositions
          darkMode={darkMode}
          keyNames={keyNames}
          investments={investments}
          openPositions = {openPositions}
        />
        </Grid>

       
      </Grid>
    </div>
  );
}
