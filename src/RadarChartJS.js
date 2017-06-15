import React from 'react';
import * as ChartJS from "react-chartjs";
import { RadarChartWrapper } from './scoreboard-styles';

export const RadarChartJS = (props) => {
  let labels = [];
  let data = [];
  (props.data).forEach(function (item) {
    labels.push(item.label)
    data.push(item.value)
  })

  let chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'
        ],
        borderColor: [
          'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
  let chartOptions = {
    options: props.options
  }
  console.log('chartData', chartData)
  return (
    <RadarChartWrapper>
     <ChartJS.Radar
        redraw
        data={chartData}
        options={chartOptions}
        width={600}
        height={250}
      />
    </RadarChartWrapper>
  )
}