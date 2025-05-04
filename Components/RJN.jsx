import styled from "styled-components"

const RJN = () => {
  return (
    <Div>
      RJN
    </Div>
  )
}

export default RJN;

const Div = styled.div`
    background-color: black;
    color: white;
    width: fit-content;
    padding-right: 30px;
    padding-left: 30px;
    border-radius: 10px;
    height: fit-content;
    font-size: 11px;
    position: absolute;
    bottom: 10px;

    @media (max-width: 600px){
        background-color: #000000;
        color: #ffffff;
    }
`
