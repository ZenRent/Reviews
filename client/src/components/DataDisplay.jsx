import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-flow: row nowrap;
margin-left: 10%;
margin-right: 10%;
`;

const Heading = styled.h1`
flex: 1;
border: 1px dotted;
text-align: left;
padding: 5px;
font-weight: bold;
font-size:16px;
`;

const Cell = styled.div`
flex: 1;
border: 1px dotted;
text-align: left;
padding: 5px;
font-size: 13px;
`;

const DataDisplay = (props) => {
  return (<div>
    <Wrapper><Heading>4.94 (161 reviews)</Heading></Wrapper>
    <Wrapper><Cell>Cleanliness</Cell><Cell>**********5.0</Cell><Cell>Accuracy</Cell><Cell>**********4.5</Cell></Wrapper>
    <Wrapper><Cell>Communication</Cell><Cell>**********4.8</Cell><Cell>Location</Cell><Cell>**********4.9</Cell></Wrapper>
    <Wrapper><Cell>Check-in</Cell><Cell>**********4.6</Cell><Cell>Value</Cell><Cell>**********5.0</Cell></Wrapper>
  </div>);
};

export default DataDisplay;
