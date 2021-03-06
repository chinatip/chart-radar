import React, { Component } from 'react';
import echarts from 'echarts';
import { radarChart as radarChartPropTypes } from './propTypes'

class RadarEchart extends Component {

  componentDidMount() {
    this._chart = echarts.init(this._ref);
    this.createGraph();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      this.createGraph();
    }
  }

  createGraph() {
    const data = this.props.data.map(item => {
      return item.value
    })
    const labels = this.props.data.map(item => {
      return {name: item.label, max: this.props.options.maxValue}
    })

    const option2 = {
      tooltip: {},
      radar: {
        // shape: 'circle',
        indicator: labels
      },
      series: [
        {
          name: this.props.chatName,
          type: 'radar',
          data: [
            {
              value: data,
              name: this.props.dataName
            }
          ]
        }
      ]
    };    
    this._chart.setOption(option2);
  }
  render() {
    return (
      <div 
        ref={ref => { this._ref = ref }}
        style={{
          width: this.props.width,
          height: this.props.height,
        }}
      >
      </div>
    )
  }
}

RadarEchart.defaultProps = {
  width: 600,
  height: 600,
  options: {
    maxValue: 20
  }  
}
RadarEchart.propTypes = radarChartPropTypes

export default RadarEchart;
