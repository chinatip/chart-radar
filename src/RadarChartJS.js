import React from 'react';
import * as ChartJS from "react-chartjs";
import { RadarChartWrapper } from './scoreboard-styles';
import { radarChart as radarChartPropTypes } from './propTypes'

export const RadarChartJS = (props) => {
  
  const data = props.data.map(item => {
    return item.value
  })
  const labels = props.data.map(item => {
    return item.label
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
        width={props.width || 600}
        height={props.height || 250}
      />
    </RadarChartWrapper>
  )
}

RadarChartJS.propTypes = radarChartPropTypes