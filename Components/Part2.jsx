import React from 'react'
import styled from 'styled-components'

const Part2 = ({setSelectednumber , selectednumber , random}) => {

  return (
      <Main>
        <ButtonCont>
        {[1,2,3,4,5,6].map((number)=>(
          <Button key={number} onClick={()=>{setSelectednumber(number); random()}}>
          {number}
          </Button>
        ))}
      </ButtonCont>
        <P>{selectednumber==null?'Make a guess':`Your guess is ${selectednumber}`}</P>
      </Main>
  )
}

export default Part2
const Main = styled.div``
const ButtonCont = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`
const Button = styled.button`
  height: 60px;
  width: 80px;
  font-size: 25px;
border: 1px solid red;

@media (max-width: 600px){
       height: 40px;
       width: 40px;
       font-size: 15px;
      }
`;
const P = styled.p`
    font-size: 20px;

    @media (max-width: 600px){
      font-size: 13px;
    }
`;
