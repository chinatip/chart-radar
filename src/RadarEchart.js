import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

let labels = [];
let data = [];
var option2 = {}
class RadarEchart extends Component {
  constructor(){
    super();
  }

  componentWillMount() {
    (this.props.data).forEach(function (item) {
      labels.push({name: item.label, max: 20})
      data.push(item.value)
    })
    option2 = {
      tooltip: {},
      radar: {
        // shape: 'circle',
        indicator: labels
      },
      series: [
        {
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          data: [
            {
              value: data,
              name: '预算分配（Allocated Budget）'
            }
          ]
        }
      ]
    };
    console.log("option2", option2)
  }
  componentDidMount() {
    var myChart = echarts.init(this._ref);
    myChart.setOption(option2);
  }
  render() {
    return (
      <div 
        ref={ref => { this._ref = ref }}
        style={{
          width: "600px",
          height: "600px"
        }}
      >
      </div>
    )
  }
}

export default RadarEchart;
