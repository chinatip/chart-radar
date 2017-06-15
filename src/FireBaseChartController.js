import { toArray } from 'lodash';
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
  const ChartWithController = withChartController(ChartComponent, chartOptions)
  return class ChartWithFirebaseController extends Component {
    static defaultProps = {
      firebasePath: '/chart/1234'
    };
    onUpdateValue = (key, e) => {
      const value = e.target.value
      const prevStats = this.props.data[key]
      const updatePath = this.props.firebasePath +  '/' + key
      this.props.firebase.update(updatePath, { ...prevStats, value: Number(value) })
    }

    onUpdateLabel = (key, e) => {
      const value = e.target.value
      const prevStats = this.props.data[key]
      const updatePath = this.props.firebasePath +  '/' + key
      this.props.firebase.update(updatePath, { ...prevStats, label: value })
    }

    onAddItem = () => {
      this.props.firebase.push(this.props.firebasePath, {label: "label-" + Date.now(), value: 5})
    }

    onDeleteItem = (key) => {
      this.props.firebase.remove(this.props.firebasePath +  '/' + key)
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