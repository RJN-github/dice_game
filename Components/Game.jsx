import React, { useEffect, useState } from 'react'
import Section1 from './Section1'
import styled from 'styled-components'
import Dice from './Dice'
import RJN from './RJN'

const Game = ({ toggle }) => {

  const [selectednumber, setSelectednumber] = useState(null)
  const [dice, setDice] = useState(null)
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState("Make a Guess")


  const random = () => {
    const rand = Math.floor(Math.random() * 6 + 1)
    setDice(rand);
  }
  
  useEffect(() => {
    if (selectednumber === null) {
      setMessage("Please select a number before rolling the dice.");
    }
    if (dice !== null && selectednumber!== null) {
      if (selectednumber == dice) {
        setMessage("You Guessed It Right")
        setScore((prev) => prev + 1)
      }
      else {
        setMessage("Better Luck Next Time")
      }
    }
    // if (score==7) {
    //   setMessage("Thala for a reason (Thala will be shown until you progress)");
    // }
    const timeout = setTimeout(() => {
      setMessage("");
    }, 3000);
    return () => clearTimeout(timeout)
  }, [selectednumber, dice])

  return (
    <Div>
      <Section1 score={score} random={random} setSelectednumber={setSelectednumber} selectednumber={selectednumber} />
      <Dice dice={dice} message={setMessage} />
      <Message><div className={message=="You Guessed It Right"?'correct':'incorrect'} messagecont>{message}</div></Message>
      <Buttoncont><Button onClick={toggle}>Go Back</Button></Buttoncont>
    </Div>
  )
}

export default Game;

const Div = styled.div`
height: 100%;
width: 95%;
`;
const Message = styled.div`
display: flex;
justify-content: center;
font-size: 30px;
align-items: center;
text-align: center;

@media (max-width: 600px){
   font-size: 12px;
  }
`;
const Buttoncont = styled.div`
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 600px){
    transform:translateY(350px);
  }
`;
const Button = styled.div`
display: flex;
justify-content: center;
align-items:center;
  height: 5vh;
width: 10vw;
border-radius: 5px;
background-color: black;
color: white;
width: fit-content;
padding: 3px;
`