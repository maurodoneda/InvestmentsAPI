import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const TAX_RATE = 0.15;

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "BRL",
});




let positionRows = [];
  function subtotal(items) {
    return items.map(({ pnl }) => pnl).reduce((sum, i) => sum + i, 0);
  }
  
  const totalProfit = subtotal(positionRows);
  const taxes = TAX_RATE * totalProfit;
  const netProfit = totalProfit - taxes;

  

export default function OpenPositions({openPositions}) {
  const classes = useStyles();
  
 

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={7}>
              <h2>Open Positions</h2>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Asset</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Initial Price</TableCell>
            <TableCell align="right">Current Price</TableCell>
            <TableCell align="right">Total Invested</TableCell>
            <TableCell align="right">P / L</TableCell>
            <TableCell align="right">Return</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {openPositions.map((position) => (
            <TableRow key={position.asset}>
              <TableCell>{position.asset}</TableCell>
              <TableCell align="right">{position.qty}</TableCell>
              <TableCell align="right">{position.initialPrice}</TableCell>
              <TableCell align="right">
                {formatter.format(position.currentPrice)}
              </TableCell>
              <TableCell align="right">
                {formatter.format(position.totalInvested)}
              </TableCell>
              <TableCell align="right">{formatter.format(position.pnl)}</TableCell>
              <TableCell align="right">
                {position.percent.toFixed(2) + " %"}
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell rowSpan={3} />
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Total Profit</TableCell>
            <TableCell align="right">{formatter.format(totalProfit)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{formatter.format(taxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{formatter.format(netProfit)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
