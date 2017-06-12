import styled, { css } from 'styled-components'

///// ScoreBoard

export const ScoreBox = styled.div`
  display: flex;
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
  width: 12em;
  padding: 0.8%;
  margin: 2%;
  align-items: baseline;
  box-shadow: 0 5px 20px -5px rgba(0, 0, 0, .15);
  border-radius: 15px;
`

export const InputScore = styled.input`
  border: 1px solid #3db9df;
  border-radius: 5px;
  right: 0;
`