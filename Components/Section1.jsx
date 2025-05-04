import Part1 from "./Part1"
import Part2 from "./Part2"
import styled from "styled-components"
import RJN from "./RJN"

const Section1 = ({setSelectednumber , selectednumber , random , score}) => {
  return (
    <Main>
      <Part1 score = {score}/>
      <RJN/>
      <Part2 random = {random}  setSelectednumber = {setSelectednumber} selectednumber = {selectednumber}/>
    </Main>
  )
}

export default Section1
const Main = styled.div`
    height: 30%;
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    
@media (max-width: 1000px){
        background-color: black;
        color: white;
        flex-direction: column;
        align-items: center;
}
`
const UL = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 10px;
`;
const Button = styled.button`
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;

   
`;
