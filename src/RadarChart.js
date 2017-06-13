import React, { Component } from 'react'
import * as ChartJS from "react-chartjs"
// import * as ChartJS2 from "react-chartjs-2"
import * as Rechart from 'recharts';
import ScoreItem from './ScoreItem'
import { map } from 'lodash'
import { RadarChartWrapper, RadarChartControllerWrapper, ScoreItemListWrapper } from './scoreboard-styles'

console.log(ChartJS)
// const RadarChart = Chart.Radar;

export const RadarReChart = ({ data, options={} }) => {
  return (
    <Rechart.RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
      <Rechart.PolarGrid />
      <Rechart.PolarAngleAxis dataKey="label" />
      <Rechart.Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      {options.maxValue? <Rechart.PolarRadiusAxis angle={30} domain={[0, options.maxValue]} axisLine={false} tick={false}/>: null}
    </Rechart.RadarChart>
  )
}

/*export const RadarChartJS2 = (props) => {
  // let labels = [];
  // let data = [];
  // (props.data).forEach(function (item) {
  //   labels.push(item.name)
  //   data.push(item.value)
  // })

  // let chartData = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       data: data,
  //       backgroundColor: [
  //         'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'
  //       ],
  //       borderColor: [
  //         'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)'
  //       ],
  //       borderWidth: 1
  //     }
  //   ]
  // };
  // let chartOptions = {
  //   options: props.options
  // }
  // console.log('chartData', chartData)

  const data = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  };
  return (
    <RadarChartWrapper>
     <ChartJS2.Radar
        data={data}
      />
    </RadarChartWrapper>
  )
}*/

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

export const ScoreItemList = ({ data, updateValue, updateLabel }) => {
  return (
    <ScoreItemListWrapper>
      {data.map((value, key) => {
        return (
          <ScoreItem
            id={key}
            key={key}
            name={value.label}
            value={value.value}
            data={data}
            updateValue={(key, e) => updateValue(key, e)}
            updateLabel={(key, e) => updateLabel(key, e)}></ScoreItem>
        )
      })}
    </ScoreItemListWrapper>
  )
}

const withChartController = (ChartComponent, chartOptions={}) => {
  const ChartWithController = ({ data, updateLabel, updateValue }) => (
    <RadarChartControllerWrapper>
      <ScoreItemList
        data={data}
        updateValue={updateValue}
        updateLabel={updateLabel}
      />
      <ChartComponent data={data} options={chartOptions}/>
    </RadarChartControllerWrapper>
  )
  return ChartWithController
}


// export const RadarChartWithController = withChartController(RadarChartJS)
// export const RadarReChartWithController = withChartController(RadarReChart)

const withStateController = (ChartComponent, chartOptions) => {
  const ChartWithController = withChartController(ChartComponent, chartOptions)
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
      newData[key].label = e.target.value
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
export const RadarReChartWithStateController = withStateController(RadarReChart, { maxValue: 20 })

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