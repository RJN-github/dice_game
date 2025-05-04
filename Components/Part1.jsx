
import { useEffect, useState } from "react";
import styled from "styled-components"

const Part1 = ({score}) => {
  return (
    <Main>
    <H1>{score}</H1>
    <P>Total Score</P>
    </Main>
  )
}

export default Part1;

const Main = styled.div`
font-size: 30px;
`;
const P = styled.p`
    font-size: 20px;

    @media (max-width: 600px){
      font-size: 13px;
    }
`;
const H1 = styled.h1`
    @media (max-width: 600px){
      font-size: 40px;
      text-align: center;
    }
`;
