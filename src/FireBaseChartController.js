import { map, toArray } from 'lodash';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { RadarRechart } from './RadarRechart';
import { EditScoreMenu } from './EditScoreMenu';
import { RadarChartControllerWrapper } from './scoreboard-styles';
 
const withChartController = (ChartComponent, chartOptions={}) => {
  const ChartWithController = ({ data, updateLabel, updateValue, addItem, deleteItem }) => (
    <RadarChartControllerWrapper>
      <EditScoreMenu
        data={data}
        updateValue={updateValue}
        updateLabel={updateLabel}
        addItem={addItem}
        deleteItem={deleteItem}
      />
      <ChartComponent data={Array.isArray(data)? data: toArray(data)} options={chartOptions}/>
    </RadarChartControllerWrapper>
  )
  return ChartWithController
}

export const withFirebaseController = (ChartComponent, chartOptions) => {
  // console.log("RadarChartFirebase Data", data)
  const ChartWithController = withChartController(ChartComponent, chartOptions)
  return class ChartWithFirebaseController extends Component {
    static defaultProps = {
      firebasePath: '/chart/1234'
    };
    onUpdateValue = (key, value) => {
      const prevStats = this.props.data[key]
      const updatePath = this.props.firebasePath +  '/' + key
      this.props.firebase.update(updatePath, { ...prevStats, value: Number(value) })
    }

    onUpdateLabel = (key, value) => {
      const prevStats = this.props.data[key]
      const updatePath = this.props.firebasePath +  '/' + key
      this.props.firebase.update(updatePath, { ...prevStats, label: value })
    }

    onAddItem = () => {
      let labels = []
      map(this.props.data, (value, key) => {
        let label = value.label
        if(label.length > 6){
          if(label.includes("label-")) {
            let num = parseInt(label.substr(6, label.length))
            labels.push(num)
          }
        }
      })
      let newLabel = this.generateLabel(labels.sort(function(a,b){return a - b}))
      this.props.firebase.push(this.props.firebasePath, {label: "label-" + newLabel, value: 5})
    }

    onDeleteItem = (key) => {
      this.props.firebase.remove(this.props.firebasePath +  '/' + key)
    }

    generateLabel(nums) {
      if (nums.length == 0) return 1;
      return nums[nums.length - 1] + 1
    }

    render() {
      return (
        <ChartWithController
          data={this.props.data}
          updateLabel={this.onUpdateLabel}
          updateValue={this.onUpdateValue}
          deleteItem={this.onDeleteItem}
          addItem={this.onAddItem}
        />
      );
    }
  }
}

export const RadarChartWithFirebaseController = withFirebaseController(RadarRechart, { maxValue: 20 })