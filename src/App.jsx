import { useState } from 'react'
import Startgame from '../Components/Startgame'
import styled from 'styled-components'
import Game from '../Components/Game'
function App() {

const [isgamestarted, setIsgamestarted] = useState(true)

const togglegameplay = () =>{
  setIsgamestarted((prev) => !prev)
}
  return (
    <>
      <Main>
        {isgamestarted?<Startgame toggle = {togglegameplay}/>:<Game toggle = {togglegameplay}/>}
      </Main>
    </>
  )
}
export default App;

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
