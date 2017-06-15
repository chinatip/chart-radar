import styled, { css, injectGlobal } from 'styled-components'

//// global

export const GlobalStyles = ({ theme }) => {
    injectGlobal`
        body {
            
        }
    `

    return null
}


///// ScoreBoard

export const ScoreBox = styled.div`
  // display: flex;
  // flex-direction: row;
`

///// UserBoard

export const UserList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: #e3e3e3;
`

export const UserBoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const ScoreItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: black;
  height: 100%;
`

///// ScoreItem

export const ScoreItemWrapper = styled.div`
  display: flex;  
  padding: 5px;
  margin: 1% 0 1% 0;
  align-items: baseline;
  box-shadow: 0 5px 20px -5px rgba(0, 0, 0, .15);
  border-radius: 15px;
  background-color: white;
`

export const InputScore = styled.input`
  border: 1px solid #3db9df;
  border-radius: 5px;
  margin: 10px;
`

export const InputCriteria = styled.input`
  border: 1px solid #3db9df;
  border-radius: 5px;
  margin: 10px;
`

const ButtonItem = css`
  width: 30px;
  border-radius: 20px;
  margin: 5px;
  color: white;
`

export const DeleteButton = styled.button`
  ${ ButtonItem }
  margin-right: 10px;
  background-color: #ff5c5c;
  border: 5px solid #ff5c5c;
`

export const PlusButton = styled.button`
  ${ ButtonItem }
  background-color: #ff5c5c;
  border: 5px solid #ff5c5c;

`

export const MinusButton = styled.button`
  ${ ButtonItem }
  background-color: #ff5c5c;
  border: 5px solid #ff5c5c;
`

export const AddButton = styled.button`
  background-color: #3db9df;
  border: 5px solid #3db9df;
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