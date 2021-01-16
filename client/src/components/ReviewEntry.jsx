import React from 'react';
import styled from 'styled-components';

const ReviewContainer = styled.div`
margin: 20px;
padding: 2px;
`;

const Paragraph = styled.p`
text-align: left;
`;

const Img = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`;

const ReviewEntry = (props) => {

  console.log("props.review.Reviews.body", props.review.Reviews)
  // let obj = props.review.Reviews;
  // let Review = obj.pop();
  // console.log(Review.Body)

  console.log("props.review.Reviews[0].Body", props.review.Reviews[0].Body)
  const { Body, Username, DateTime, Image } = props.review.Reviews[0];
  console.log("Username", Image);

  return (<ReviewContainer>
    <div>{Username}</div>
    <div>{DateTime}</div>
    <Paragraph>{Body}</Paragraph>
    <Img src={Image}></Img>
  </ReviewContainer>);
};

export default ReviewEntry;