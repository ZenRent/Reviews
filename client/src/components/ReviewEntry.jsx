import React from 'react';
import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const ReviewContainer = styled.div`
display: flex;
margin: 20px;
padding: 4px;
font-size: 13px;
color: #222222;
grid-gap: 30px;
width: 550px;
letter-spacing: .75px;

`;

const VerticalContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;

const Img = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`;

const Paragraph = styled.p`
text-align: left;
justify-content: flex-start;
line-height: 1.5;
`;

const ReviewEntry = (props) => {

  // console.log("props.review.Reviews.body", props.review.Reviews)
  // let obj = props.review.Reviews;
  // let Review = obj.pop();
  // console.log(Review.Body)

  // console.log("props.review.Reviews[0].Body", props.review.Reviews[0].Body)
  let { Body, Username, DateTime, Image } = props.review.Reviews[0];
  // console.log("DateTime", DateTime);


  return (<ReviewContainer>
    <Img src={Image}></Img>
    <VerticalContainer>
      <div>{Username}</div>
      <div>{DateTime}</div>
    </VerticalContainer>
    <Paragraph>{Body}</Paragraph>
  </ReviewContainer>);
};

export default ReviewEntry;