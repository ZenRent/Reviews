import React from 'react';
import styled from "styled-components"

const Heading = styled.h1`

color: black;
text-align: center;
`;

const Wrapper = styled.div`
display: flex;
flex-flow: row nowrap;
margin-left: 10%;
margin-right: 10%;

`;

const Col1 = styled.div`
background-color: pink;
flex: 1;
`;

const Col2 = styled.div`
background-color: yellow;
flex: 1;
`;

const DataDisplay = (props) => {
  return (<div>
    <Wrapper><Col1>Overall</Col1></Wrapper>
    <Wrapper><Col1>Cleanliness</Col1><Col2>Accuracy</Col2></Wrapper>
    <Wrapper><Col1>Communication</Col1><Col2>Location</Col2></Wrapper>
    <Wrapper><Col1>Check-in</Col1><Col2>Value</Col2></Wrapper>
  </div>)
}

export default DataDisplay;

