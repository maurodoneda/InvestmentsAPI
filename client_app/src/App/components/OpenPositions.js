import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'BRL',
});


function createRow(asset, qty, initialPrice, currentPrice) {
  const totalInvested = qty*initialPrice;
  const pnl = (currentPrice - initialPrice)*qty;
  const percent = (pnl/totalInvested)*100;
  return { asset, qty, initialPrice, currentPrice, totalInvested, pnl, percent};
}



const rows = [
  createRow('PETR4', 500, 11.15, 22.70),
  createRow('WEGE3', 700, 35.75, 64.82),
  createRow('EZTC3', 1000, 29.70, 40.50),
];

function subtotal(items) {
  return items.map(({ pnl }) => pnl).reduce((sum, i) => sum + i, 0);
}

const totalProfit = subtotal(rows);
const taxes = TAX_RATE * totalProfit;
const netProfit = totalProfit - taxes;

let positions= [{}];

export default function OpenPositions({investments}) {
  const classes = useStyles();

  for (let i = 0; i < investments.length; i++) {
      if (!positions.includes(investments[i].asset)) {
          positions.push(investments[i].asset);
      }
  }

  
 console.log(positions);
  
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
              <TableCell align="right">{row.currentPrice}</TableCell>
              <TableCell align="right">{formatter.format(row.totalInvested)}</TableCell>
              <TableCell align="right">{formatter.format(row.pnl)}</TableCell>
              <TableCell align="right">{row.percent.toFixed(2)+' %'}</TableCell>
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
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
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