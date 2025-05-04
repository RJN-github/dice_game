import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import dice1 from '../src/assets/dice_1.png'
import dice2 from '../src/assets/dice_2.png'
import dice3 from '../src/assets/dice_3.png'
import dice4 from '../src/assets/dice_4.png'
import dice5 from '../src/assets/dice_5.png'
import dice6 from '../src/assets/dice_6.png'

const Dice = (props) => {

  const [dicenum, setDicenum] = useState()
  useEffect(() => {
    switch (props.dice) {
      case 1:
        setDicenum(dice1);
        break;
      case 2:
        setDicenum(dice2);
        break;
      case 3:
        setDicenum(dice3);
        break;
      case 4:
        setDicenum(dice4);
        break;
      case 5:
        setDicenum(dice5);
        break;
      case 6:
        setDicenum(dice6);
        break;
      default:
        setDicenum(null);
    }
  }, [props.dice]);

  return (
    <DiceCont>
      {dicenum ? <img src={dicenum} alt={`Dice face ${props.dice}`} /> :''}
    </DiceCont>
  )
}

export default Dice;

const DiceCont = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  height: 250px;
  display: flex;
  justify-content: center;

    @media (max-width: 600px){
      height: 100px;
    }
;
`

  