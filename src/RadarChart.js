import React, { Component } from 'react'
import Chart from "react-chartjs"
import ScoreItem from './ScoreItem'
import { map } from 'lodash'
import { RadarChartWrapper, ScoreItemListWrapper } from './scoreboard-styles'

// const RadarChart = Chart.Radar;

export const RadarReChart = (props) => {
  return null
}

export const RadarChartJS = (props) => {
  let labels = [];
  let data = [];
  (props.data).forEach(function (item) {
    labels.push(item.name)
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
    options: {}
  }
  return (
    <div>
     <Chart.Radar
        redraw
        data={chartData}
        options={chartOptions}
        width={600}
        height={250}
      />
    </div>
  )
}

export const ScoreItemList = ({ data, updateValue, updateLabel }) => {
  return (
    <ScoreItemListWrapper>
      {data.map((value, key) => {
        return (
          <ScoreItem
            id={key}
            key={key}
            name={value.name}
            value={value.value}
            data={data}
            updateValue={(key, e) => updateValue(key, e)}
            updateLabel={(key, e) => updateLabel(key, e)}></ScoreItem>
        )
      })}
    </ScoreItemListWrapper>
  )
}

const withChartController = (ChartComponent) => {
  const ChartWithController = ({ data, updateLabel, updateValue }) => (
    <RadarChartWrapper>
      <ScoreItemList
        data={data}
        updateValue={updateValue}
        updateLabel={updateLabel}
      />
      <ChartComponent data={data}/>
    </RadarChartWrapper>
  )
  return ChartWithController
}


// export const RadarChartWithController = withChartController(RadarChartJS)
// export const RadarReChartWithController = withChartController(RadarReChart)

const withStateController = (ChartComponent) => {
  const ChartWithController = withChartController(ChartComponent)
  class ChartWithStateController extends Component {
    constructor(props) {
      super();
      this.state = {
        data: props.data || []
      };
    }

    updateValue = (key, e) => {
      let newData = [...this.state.data]
      newData[key].value = e.target.value
      this.setState({data: newData})
      if (this.props.onUpdateValue) {
        this.props.onUpdateValue(key, e.target.value)
      }
    }

    updateLabel = (key, e) => {
      let newData = [...this.state.data]
      newData[key].name = e.target.value
      this.setState({data: newData})
      if (this.props.onUpdateLabel) {
        this.props.onUpdateLabel(key, e.target.value)
      }
    }

    render() {
      return (
        <ChartWithController
          data={this.state.data}
          updateLabel={this.updateLabel}
          updateValue={this.updateValue}
        />
      );
    }
  }
  return ChartWithStateController
}

export const RadarChartWithStateController = withStateController(RadarChartJS)
export const RadarReChartWithStateController = withStateController(RadarReChart)

export class RadarChartWithFirebaseController extends Component {
  static defaultProps = {
    firebasePath: '/chart/1234'
  };
  updateValue = (key, value) => {
    this.props.firebase.update(this.props.firebasePath +  '/' + key + '/value' , value)
  }

  onUpdateLabel = (key, value) => {
    // updateWithFirebase
    this.props.firebase.update(this.props.firebasePath +  '/' + key + '/label' , value)
  }

  render() {
    return (
      <RadarChartWithStateController
        data={this.props.data}
        onUpdateLabel={this.onUpdateLabel}
        onUpdateValue={this.onUpdateValue}
      />
    );
  }
}

export default RadarChartWithStateController