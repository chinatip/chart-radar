import styled, { css } from 'styled-components'

///// ScoreBoard

export const ScoreBox = styled.div`
  display: flex;
  flex-direction: row;
`

///// UserBoard

export const ScoreList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: grey;
`

export const UserList = styled.div`
  width: 300px;
  background-color: green;
`

export const ScoreItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

///// ScoreItem

export const ScoreItemWrapper = styled.div`
  display: flex;  
  justify-content: space-between;
  width: 280px;
  padding: 1%;
  margin: 1%;
  align-items: baseline;
  box-shadow: 0 5px 20px -5px rgba(0, 0, 0, .15);
  border-radius: 15px;
  background-color: white;
`

export const InputScore = styled.input`
  border: 1px solid #3db9df;
  border-radius: 5px;
`

export const InputCriteria = styled.input`
  border: 1px solid #3db9df;
  border-radius: 5px;
  margin: 10px;
`

export const DeleteButton = styled.button`
  margin: 10px;
  background-color: #ff5c5c;
  border: 5px solid #ff5c5c;
  border-radius: 150px;
`

////// RadarChart

export const RadarChartWrapper = styled.div`
  // display: flex;
`

export const RadarChartControllerWrapper = styled.div`
  display: flex;
  // flex-direction: column;
`