import React, { useState, useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    display:"flex",
    justifyContent: 'center',
  },

  box: {
    position:'relative',
    top: '-15px',
    minWidth: 400
  },


}));

const DoughnutChart = ({ theme, darkMode }) => {
  const classes = useStyles();

  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      datasets: [{
        data: [15, 20, 30],
        backgroundColor: ["#36A2EB","#FFCD56","#FF6384"]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Blue',
        'Yellow',
        'Red'
    ]
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Paper  className={classes.box}>
        <h2 className={classes.title}>Portfolio</h2>
        <Doughnut
         
          data={chartData}
          height={460}
          width={400}
          options={{
            responsive: false,
            maintainAspectRatio: true,
            legend: {
              display: true,
              labels: {
                fontColor: "black",
              },
              align: "center",
              position: "bottom",
            },

            cutoutPercentage: 60,


          }}
        />
      </Paper>
    </div>
  );
};

export default DoughnutChart;
