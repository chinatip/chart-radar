import React from 'react';
import { map } from 'lodash';
import ScoreItem from './ScoreItem';
import { ScoreItemListWrapper, AddButton } from './scoreboard-styles';

export const EditScoreMenu = ({ data, updateValue, updateLabel , addItem, deleteItem }) => {
  return (
    <ScoreItemListWrapper>
      {map(data, (value, key) => {
        return (
          <ScoreItem
            id={key}
            key={key}
            label={value.label}
            value={value.value}
            data={data}
            updateValue={updateValue}
            updateLabel={updateLabel}
            deleteItem={deleteItem}></ScoreItem>
        )
      })}
      <AddButton onClick={addItem}>+</AddButton>
    </ScoreItemListWrapper>
  )
}