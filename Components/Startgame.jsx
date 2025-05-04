import styled from 'styled-components';
import RJN from './RJN';
import startgameimg from '../src/assets/dice.png'
const Startgame = ({toggle}) => {
    return (
        <Container>
            <img src={startgameimg} alt="Dice" />
            <Button onClick={toggle}>Play Now</Button>
            <RJN/>
        </Container>
    );
};

export default Startgame;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px){
    flex-direction: column;
  }
`;

const Button = styled.button`
width: fit-content;
height: 5vh;
padding: 5px;
border-radius: 5px;
background-color: black;
color: white;
`;
