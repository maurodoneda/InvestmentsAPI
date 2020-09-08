import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    fontColor: "white",
  },
}));

const EvolutionChart = ({ theme, darkMode }) => {
  const classes = useStyles();

  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug"],
      datasets: [
        {
          label: "Monthly return - %",
          data: ["10", "8", "-12", "20", "11", "10", "2", "5"],
          backgroundColor: ["rgba(75,192,192,0.8)"],
          borderWidth: 2,
          pointBackgroundColor: 'yellow'
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Paper>
        <Line
          className={classes.box}
          data={chartData}
          height={500}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            height: 500,
            title: {
              text: "Portfolio Return - 2020",
              display: true,
              fontColor: "white",
            },
            legend: {
              display: true,
              labels: {
                fontColor: "white",
              },
              align: "center",
              position: "bottom",
            },

            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],

              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </Paper>
    </div>
  );
};

export default EvolutionChart;
