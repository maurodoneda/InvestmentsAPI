import React, {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    box: {
      minWidth: 300,
      height: 500,
    },
  });

const EvolutionChart = () => {
    const classes = useStyles();

    const [chartData, setChartData] = useState({})

    const chart =() => {
        setChartData({
            labels:['jan','feb','mar','apr','may','jun','jul','aug'],
            datasets:[
                {
                    
                    label: 'Monthly return - %',
                    data:['10','8','-12','20','11','10','2','5'],
                    backgroundColor:[
                        'rgba(75,192,192,0.6)'
                    ],
                    borderWidth:2
                }
            ]
        })
    }

    useEffect(() => {
      chart()
    }, [])

    return (
        <div>
            <Paper>
            <Line className={classes.box} data={chartData} options={{
            responsive: true,
            title:{text: 'RETURN -2020', display: true},
            scales: {
                yAxes:[
                    {
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 10,
                            beginAtZero: true
                        },
                        gridLines:{
                            display: false
                        }
                    }
                ],

                xAxes:[
                    {
                        gridLines:{
                            display: false
                        }
                    }
                ]

            }
            
            }}/>
            </Paper>
        </div>
    )
}

export default EvolutionChart;

