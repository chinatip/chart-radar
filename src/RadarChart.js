import React, {Component} from 'react'
import Chart from "react-chartjs"
import ScoreItem from './ScoreItem'
import {map} from 'lodash'
import {RadarChartWrapper} from './scoreboard-styles'

const RadarChart = Chart.Radar;

class RedarChart extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.data || []
    };
  }

  updateValue(key, e) {
    console.log("click Key", key)
    console.log("e", e.target.value)
    let newData = []
    for(let i=0; i<this.state.data.length; i++) {
      if(i == key)
        newData.push({
          name: this.state.data[i].name,
          value: e.target.value
        })
      else
      newData.push(this.state.data[i])
    }
    console.log("newData", newData)
    this.setState({data: newData})
  }

  render() {
    let labels = [];
    let data = [];
    (this.state.data).forEach(function (item) {
      labels.push(item.name)
      data.push(item.value)
    })

    console.log("labels", labels)
    console.log("data", data)

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
      options: {}
    }
    return (
      <RadarChartWrapper>
        {this.state.data.map(function(value, key) {
          return (
            <ScoreItem
              id={key}
              name={value.name}
              value={value.value}
              data={this.state.data}
              updateValue={(key, e) => this.updateValue(key, e)}></ScoreItem>
          )
        }.bind(this))}
        <RadarChart
          redraw
          data={chartData}
          options={chartOptions}
          width="600"
          height="250"/>
      </RadarChartWrapper>
    );
  }
}

export default RedarChart