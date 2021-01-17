import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-flow: row nowrap;
margin-left: 28%;
margin-right: 28%;
color: #222222;
`;

const Heading = styled.h1`
flex: 1;
${'' /* border: 1px dotted; */}
text-align: left;
padding: 5px;
font-weight: bold;
font-size:16px;
`;

const Cell = styled.div`
flex: 1;
${'' /* border: 1px dotted; */}
text-align: left;
padding: 5px;
font-size: 13px;
`;

const ReviewStar = styled.img`
width:20px;
height: auto;
margin-right: 7px;
`;

const RatingBar = styled.img`
width:150px;
height: 15px;
margin-right: 7px;
`;

const DataDisplay = (props) => {
  return (<div>
    <Wrapper><Heading><ReviewStar src='red-star.png' />4.94 (161 reviews)</Heading></Wrapper>
    <Wrapper><Cell>Cleanliness</Cell><Cell><RatingBar src='RatingBar.png' />5.0</Cell>
      <Cell>Accuracy</Cell><Cell><RatingBar src='RatingBar.png' />4.5</Cell></Wrapper>
    <Wrapper><Cell>Communication</Cell><Cell><RatingBar src='RatingBar.png' />4.8</Cell><Cell>Location</Cell><Cell><RatingBar src='RatingBar.png' />4.9</Cell></Wrapper>
    <Wrapper><Cell>Check-in</Cell><Cell><RatingBar src='RatingBar.png' />4.6</Cell><Cell>Value</Cell><Cell><RatingBar src='RatingBar.png' />5.0</Cell></Wrapper>
  </div>);
};

export default DataDisplay;
