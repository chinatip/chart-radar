/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import Welcome from './Welcome';
import ScoreBoard from '../ScoreBoard'
import ScoreItem from '../ScoreItem'
import { RadarChartJS, RadarChartWithStateController, RadarReChartWithStateController } from '../RadarChart'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


const DEFAULT_CHART_DATA = [
  {name: "X", value: "8"},
  {name: "Dev", value: "3"},
  {name: "Design", value: "10"},
  {name: "Criteria", value: "4"},
  {name: "Criteria", value: "5"}
]

storiesOf('ScoreBoard', module)
  .add('item', () => (
    <ScoreItem name={"Criteria 1 "}/>
  ))
  .add('chart', () => (
    <RadarChartJS data={DEFAULT_CHART_DATA}/>
  ))
  .add('chart with controller', () => (
    <RadarChartWithStateController data={DEFAULT_CHART_DATA}/>
  ))
  .add('Rechart chart with controller', () => (
    <RadarReChartWithStateController data={DEFAULT_CHART_DATA}/>
  ))
  .add('board', () => (
    <ScoreBoard data={DEFAULT_CHART_DATA}/>
  ))