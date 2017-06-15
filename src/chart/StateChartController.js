

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

export const RadarChartWithController = withChartController(RadarChartJS)
export const RadarRechartWithController = withChartController(RadarRechart)

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
    }

    updateLabel = (key, e) => {
      let newData = [...this.state.data]
      newData[key].label = e.target.value
      this.setState({data: newData})
    }

    deleteItem = (key) => {
      let newData = [...this.state.data]
      newData.splice(key, 1)
      this.setState({data: newData})
    }

    addItem = () => {
      let newData = [...this.state.data]
      newData.push({ label: 'label', value: 5 })
      this.setState({data: newData})
    }

    render() {
      return (
        <ChartWithController
          data={this.state.data}
          updateLabel={this.updateLabel}
          updateValue={this.updateValue}
          deleteItem={this.deleteItem}
          addItem={this.addItem}
        />
      );
    }
  }
  return ChartWithStateController
}

export const RadarChartWithStateController = withStateController(RadarChartJS)
export const RadarRechartWithStateController = withStateController(RadarRechart, { maxValue: 20 })
export default RadarChartWithStateController