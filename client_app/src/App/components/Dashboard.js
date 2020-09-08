import React, {useState} from "react";
import InvestmentTable from "./InvestmentTable";
import { makeStyles } from "@material-ui/core/styles";
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    marginLeft: 245,
  },
});

export default function Dashboard({ darkMode, keyNames, investments }) {
  const classes = useStyles();
  const [hide, setHide]= useState(false);


  return (
    <div className={classes.content}>
      <SideDrawer setHide={setHide} hide={hide}/>
      {hide ? (
        <InvestmentTable
          darkMode={darkMode}
          keyNames={keyNames}
          investments={investments}
        />
      ) : null}
    </div>
  );
}
