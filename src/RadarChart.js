import React, { Component } from 'react'
import Chart from "react-chartjs"

const LineChart = Chart.Radar;

class ScoreBoard extends Component {
  constructor(props) {
    super();
  }

  render() {
    let labels = [];
    let data = [];
    (this.props.data).forEach(function(item){
      labels.push(item.name)
      data.push(item.value)
    })

    console.log("labels", labels)
    console.log("data", data)

    let chartData = {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: [
                'rgba(0, 0, 0, 0.1)',
                'rgba(0, 0, 0, 0.1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]};
    let chartOptions = {options: {
        
        
    }}
    return (
      <div>     
        <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
      </div>
    );
  }
}

export default ScoreBoard