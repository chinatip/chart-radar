import React, { Component } from 'react'
import * as ChartJS from "react-chartjs"
// import * as ChartJS2 from "react-chartjs-2"
import * as Rechart from 'recharts';
import ScoreItem from './ScoreItem'
import { map, toArray, throttle } from 'lodash'
import { RadarChartWrapper, RadarChartControllerWrapper, ScoreItemListWrapper, AddButton } from './scoreboard-styles'

console.log(ChartJS)
// const RadarChart = Chart.Radar;

export const RadarReChart = ({ data, options={} }) => {
  console.log(data)
  return (
    <Rechart.RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
      <Rechart.PolarGrid />
      <Rechart.PolarAngleAxis dataKey="label" />
      <Rechart.Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      {options.maxValue? <Rechart.PolarRadiusAxis angle={30} domain={[0, options.maxValue]} axisLine={false} tick={false}/>: null}
    </Rechart.RadarChart>
  )
}

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

export const ScoreItemList = ({ data, updateValue, updateLabel ,addItem, deleteItem }) => {
  return (
    <ScoreItemListWrapper>
      {map(data, (value, key) => {
        return (
          <ScoreItem
            id={key}
            key={key}
            label={value.label}
            value={value.value}
            data={data}
            updateValue={(key, e) => updateValue(key, e)}
            updateLabel={(key, e) => updateLabel(key, e)}
            addItem={() => addItem()}
            deleteItem={(key) => deleteItem(key)}></ScoreItem>
        )
      })}
      <AddButton >+</AddButton>
    </ScoreItemListWrapper>
  )
}

const withChartController = (ChartComponent, chartOptions={}) => {
  const ChartWithController = ({ data, updateLabel, updateValue, deleteItem, addItem }) => (
    <RadarChartControllerWrapper>
      <ScoreItemList
        data={data}
        updateValue={updateValue}
        updateLabel={updateLabel}
        deleteItem={deleteItem}
      />
      <ChartComponent data={Array.isArray(data)? data: toArray(data)} options={chartOptions}/>
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
        data: props.data || {}
      };
    }

    updateValue = (key, e) => {
      let newData = {...this.state.data}
      newData[key].value = e.target.value
      this.setState({data: newData})
      // console.log('onUpdateValue',this.props.onUpdateValue)
      if (this.props.onUpdateValue) {
        this.props.onUpdateValue(key, e.target.value)
      }
    }

    updateLabel = (key, e) => {
      let newData = {...this.state.data}
      newData[key].label = e.target.value
      this.setState({data: newData})
      // console.log(key)
      if (this.props.onUpdateLabel) {
        this.props.onUpdateLabel(key, e.target.value)
      }
    }

    deleteItem = (key) => {
      console.log()
    }



    render() {
      return (
        <ChartWithController
          data={this.state.data}
          updateLabel={this.updateLabel}
          updateValue={this.updateValue}
          deleteItem={this.deleteItem}
        />
      );
    }
  }
  return ChartWithStateController
}

export const RadarChartWithStateController = withStateController(RadarChartJS)
export const RadarReChartWithStateController = withStateController(RadarReChart, { maxValue: 20 })

export const withFirebaseController = (ChartComponent, options) => {
  const ChartWithStateController = withStateController(ChartComponent, options)
  return class ChartWithFirebaseController extends Component {
    static defaultProps = {
      firebasePath: '/chart/1234'
    };
    onUpdateValue = throttle((key, value) => {
      const prevStats = this.props.data[key]
      const updatePath = this.props.firebasePath +  '/' + key
      this.props.firebase.update(updatePath, { ...prevStats, value: Number(value) })
    }, 300)

    onUpdateLabel = (key, value) => {
      const prevStats = this.props.data[key]
      const updatePath = this.props.firebasePath +  '/' + key
      this.props.firebase.update(updatePath, { ...prevStats, label: value })
    }

    onAddItem = (value) => {
      this.props.firebase.push({label: "label", value: 0})
    }

    onDeleteItem = (key) => {
      this.props.firebase.remove(null)
    } 

    render() {
      return (
        <ChartWithStateController
          data={this.props.data}
          onUpdateLabel={this.onUpdateLabel}
          onUpdateValue={this.onUpdateValue}
          onDeleteItem={this.onDeleteItem}
          onAddItem={this.onAddItem}
        />
      );
    }
  }
}

export const RadarChartWithFirebaseController = withFirebaseController(RadarReChart, { maxValue: 20 })

export default RadarChartWithStateController