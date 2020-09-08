import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Investment } from "../model/Investment";
import axios from "axios";

const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, type, price, quantity, market) {
  return { name, type, price, quantity, market };
}

const rows = [
  createData("PETR4", 159, 6.0, 24, 4.0),
  createData("BOVA11", 237, 9.0, 37, 4.3),
  createData("WEGE3", 262, 16.0, 24, 6.0),
  createData("PBR", 305, 3.7, 67, 4.3),
  createData("SP500", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },

  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
});

const InvestmentList = () => {
  const classes = useStyles();

  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/investments").then((response) => {
      console.log(response.data);
      setInvestments(response.data);
    });
  }, []);

 let obj = investments[0];
console.log(obj)

  return (
    <TableContainer component={Paper} className={classes.content}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {investments.map((value) => (
              <StyledTableCell align="center">{value.asset}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {investments.map((investment) => (
            <StyledTableRow key={investment.id}>
              <StyledTableCell component="th" scope="row">
                {investment.asset}
              </StyledTableCell>
              <StyledTableCell align="right">
                {investment.price}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvestmentList;
