import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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



let rows = [
  createRow("PETR4", 500, 11.15, 22.7),
  createRow("WEGE3", 700, 35.75, 64.82),
  createRow("EZTC3", 1000, 29.7, 40.5),
];

function subtotal(items) {
  return items.map(({ pnl }) => pnl).reduce((sum, i) => sum + i, 0);
}

// function updatedRow(row) {
//   return {
//     row.asset,
//   };
// }

const totalProfit = subtotal(rows);
const taxes = TAX_RATE * totalProfit;
const netProfit = totalProfit - taxes;

const totalCost = (registry, emoluments, liquidation, capitalGain) => {
  return registry + emoluments + liquidation + capitalGain;
};

const addOrSubtractQnty = (type, quantity) => {
  return type.toUpperCase() === "BUY" ? +quantity : -quantity;
};




let assetList = [];


export default function OpenPositions({ investments }) {
  const classes = useStyles();

  // Populate positions Array

  investments.map((investment) => {
      if(!assetList.includes(investment.asset))
      {
        assetList.push(
          investment.asset,
        );
        let newRow = createRow(investment.asset, investment.quantity, investment.price, 50*Math.random());
        rows.push(newRow);
      }       
})

console.log(assetList);
console.log(rows);


 // loop trough positions array, match with investment table asset, and sum the quantity and the avg price.


  // investments.map((investment, i) => {
        
  //   assetList.map((asset)=>{
  //     if(investment.asset !== asset)
  //     {
  //       openPositions.push({
  //         asset: investment.asset,
  //         quantity: investment.quantity = addOrSubtractQnty(investment.operationType,investment.quantity),
  //         price: investment.price 
  //       });
  //     }
  //   })
  // });

  
  // console.log(openPositions);
  // console.log(investments);

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
          {rows.map((row) => (
            <TableRow key={row.asset}>
              <TableCell>{row.asset}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.initialPrice}</TableCell>
              <TableCell align="right">{formatter.format(row.currentPrice)}</TableCell>
              <TableCell align="right">
                {formatter.format(row.totalInvested)}
              </TableCell>
              <TableCell align="right">{formatter.format(row.pnl)}</TableCell>
              <TableCell align="right">
                {row.percent.toFixed(2) + " %"}
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
