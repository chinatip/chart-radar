import React, { Component } from 'react'
import CategoryList from './CategoryList'
import Note from '../Note'
import RadarEchart from '../RadarEchart'
import { map, toArray, groupBy } from 'lodash'
import { isLoaded } from 'react-redux-firebase';
import styled from 'styled-components'

class CategoryBoardController extends Component {
  constructor(props) {
    super();
    const categoryData = (props.category == 'all')? props.data : groupBy(props.data, g => g.position.toLowerCase())[props.category];
    const firstElement = Object.keys(categoryData)[0];
    this.state = {
      category: props.category,
      data: categoryData,
      selectedData: categoryData[firstElement],
      idOfSelectedData: firstElement
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.category !== this.props.category) {
      this.updatePropData();
    }
  }

  updatePropData() {
    const categoryData = (this.props.category == 'all')? this.props.data : groupBy(this.props.data, g => g.position)[this.props.category];
    if(categoryData != null)
    {
      const firstElement = Object.keys(categoryData)[0];
      this.setState({
        category: this.props.category,
        data: categoryData,
        selectedData: categoryData[firstElement],
        idOfSelectedData: firstElement
      });
    }
  }

  updateSelectedData = (key) => {
    this.setState({
      selectedData: this.state.data[key],
      idOfSelectedData: key
    })
  }

  updateFirstData = (key) => {
    this.updateSelectedData(key)
  }

  render() {
    return (
      <BoardWrapper>
        <CategoryList 
          data={this.state.data}
          updateSelectedData={(key) => this.updateSelectedData(key)}
          updateFirstData={(key) => this.updateFirstData(key)}
        />
        <ChartAndNoteWrapper>
        <RadarEchart
          options={{ maxValue: 20 }}
          data={Array.isArray( this.state.selectedData.stats)? this.state.selectedData.stats: toArray(this.state.selectedData.stats)}/>
        <NoteWrapper>
        {
          map(this.state.selectedData.notes, (value, key) => {
            return (
              <Note 
                key={ key }
                id={ key }
                data={ value }
                firebase={ null }
                firebasePath={ null }
                editable={ false }
              />
            )
          })
        }
        </NoteWrapper>
        </ChartAndNoteWrapper>
      </BoardWrapper>
    )
  }
}

export default CategoryBoardController;

const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

const ChartAndNoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const NoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`