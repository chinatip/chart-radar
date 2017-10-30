import React, { Component } from 'react';
import toArray from 'lodash/toArray';

import { RadarChartControllerWrapper } from './scoreboard-styles';
import { EditScoreMenu } from './EditScoreMenu';

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
  );
  
  return ChartWithController;
}