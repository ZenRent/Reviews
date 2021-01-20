import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`

display: inline;
${'' /* border: 1px dotted; */}
text-align: left;
padding: 5px;
font-weight: bold;
font-size:16px;
margin-left: 5px;

`;

const ReviewStar = styled.img`
width:20px;
height: auto;
margin-right: 7px;
`;

const DisplayHeader = (props) => {
  return (<Heading><ReviewStar src='red-star.png' />4.94 (161 reviews)</Heading>)
};

export default DisplayHeader;