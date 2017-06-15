import React, { Component } from 'react'
import * as ChartJS from "react-chartjs"
import * as Rechart from 'recharts';
import ScoreItem from './ScoreItem'
import { RadarRechart } from './RadarRechart'

import { toArray } from 'lodash'
import { RadarChartControllerWrapper, AddButton } from './scoreboard-styles'
import { Link } from 'react-router-dom'
import { EditScoreMenu } from './EditScoreMenu'

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