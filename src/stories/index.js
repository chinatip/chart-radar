/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import Welcome from './Welcome';
import ScoreBoard from '../ScoreBoard'
import ScoreItem from '../ScoreItem'
import User from '../User'
import RadarEchart from '../RadarEchart'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


const DEFAULT_CHART_DATA = [
  { label: 'Math', value: 8 },
  { label: 'Chinese', value: 8 },
  { label: 'English', value: 8 },
  { label: 'Geography', value: 8 },
  { label: 'Physics', value: 8 },
  { label: 'History', value: 8 },
];

const DEFAULT_CHART_DATA2 = [
  { label: 'Math', value: 10 },
  { label: 'Chinese', value: 8 },
  { label: 'English', value: 9 },
  { label: 'Geography', value: 3 },
  { label: 'Physics', value: 7 },
  { label: 'History', value: 7 },
];

const DEFAULT_USERS_DATA = [
  {
    fullname: 'Ranatchai Ch.',
    stats: DEFAULT_CHART_DATA,
    notes: []
  },
  {
    fullname: 'Namtan Chinatip',
    stats: DEFAULT_CHART_DATA2,
    notes: []
  }
]


storiesOf('ScoreBoard', module)
  .add('item', () => (
    <ScoreItem name={'Critetoria 1 '}/>
  ))
  .add('chart.js', () => (
    <RadarChartJS data={DEFAULT_CHART_DATA}/>
  ))
  .add('echart', () => (
    <RadarEchart />
  ))
  .add('User', () => (
    <User data={{fullname: "Namtan Chinatip"}}
    />
  ))
  .add('User with radar chart', () => (
    <ScoreBoard data={DEFAULT_USERS_DATA}/>
  ))
  