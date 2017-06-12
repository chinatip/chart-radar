/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import Welcome from './Welcome';
import ScoreBoard from '../ScoreBoard'
import ScoreItem from '../ScoreItem'
import RadarChart from '../RadarChart'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('ScoreBoard', module)
  .add('item', () => (
    <ScoreItem name={"Criteria 1 "}/>
  ))
  .add('chart', () => (
    <RadarChart data={[{name: "X", value: "8"},
                {name: "Dev", value: "3"},
                {name: "Design", value: "10"},
                {name: "Criteria", value: "4"},
                {name: "Criteria", value: "5"}]}/>
  ))
  .add('board', () => (
    <ScoreBoard data={[{name: "Criteria", value: "8"},
                {name: "Criteria", value: "8"},
                {name: "Criteria", value: "8"},
                {name: "Criteria", value: "8"},
                {name: "Criteria", value: "8"}]}/>
  ))