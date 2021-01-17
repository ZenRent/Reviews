import React from 'react';
import styled from 'styled-components';


const ReviewContainer = styled.div`
display: flex;
margin: 20px;
padding: 4px;
`;

const VerticalContainer = styled.div`
display: flex;
flex-direction: column;
`;

const Img = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`;

const Paragraph = styled.p`
text-align: left;
`;

const ReviewEntry = (props) => {

  console.log("props.review.Reviews.body", props.review.Reviews)
  // let obj = props.review.Reviews;
  // let Review = obj.pop();
  // console.log(Review.Body)

  console.log("props.review.Reviews[0].Body", props.review.Reviews[0].Body)
  let { Body, Username, DateTime, Image } = props.review.Reviews[0];
  console.log("DateTime", DateTime);


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