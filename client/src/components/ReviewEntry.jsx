import React from 'react';
import styled from 'styled-components';

const ReviewContainer = styled.div`
display: flex;
margin: 20px 20px 3px 20px;
margin-left: 28%;
margin-right: 28%;
padding: 4px;
font-size: 13px;
color: #222222;
grid-gap: 5px;
width: 470px;
letter-spacing: .75px;
width: 50%;
`;

const VerticalContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;

const Main = styled.div`
display: flex;
margin: 3px 20px 3px 20px;
margin-left: 28%;
margin-right: 28%;
padding: 4px;
font-size: 13px;
color: #222222;
grid-gap: 10px;
width: 370px;
letter-spacing: .75px;
`;

const Img = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
justify-content: flex-start;
${'' /* width: ${(props) => props.size / 12 * 100}vw; */}
`;

const Paragraph = styled.p`
text-align: left;
justify-content: flex-start;
line-height: 1.5;
`;

const User = styled.div`
font-weight: 900;
color: black;
font-size: 12.3px;

`;
const Date = styled.div`
font-weight: lighter;
font-size: 12px;
`;

const HighLight = styled.p`
color: yellow;
`;

const ReviewEntry = (props) => {
  let { Body, Username, DateTime, Image } = props.review.Reviews[0];

  return (<div><ReviewContainer>
    <Img src={Image} ></Img>
    <VerticalContainer>
      <User>{Username}</User>
      <Date>{DateTime}</Date>
    </VerticalContainer>
  </ReviewContainer>
    <Main>
      <Paragraph>{Body}</Paragraph>
    </Main></div>);
};

export default ReviewEntry;