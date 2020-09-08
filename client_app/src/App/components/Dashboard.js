import React from 'react';
import InvestmentList from './InvestmentList';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    marginLeft: '250px'
  },

});

export default function Dashboard({darkMode}) {
  const classes = useStyles();

  return (
    <div className = {classes.content}>
      <InvestmentList darkMode={darkMode}/>
    </div>

  );
}