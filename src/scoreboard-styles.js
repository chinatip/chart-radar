import styled, { css } from 'styled-components'

///// ScoreBoard

export const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

///// ScoreItem

export const ScoreItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
  padding: 1%;
  margin: 0.25%;
  align-items: baseline;
  box-shadow: 0 5px 20px -5px rgba(0, 0, 0, .15);
  border-radius: 15px;
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