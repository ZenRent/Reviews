import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
display: inline;
text-align: left;
padding: 5px;
font-weight: bold;
font-size:16px;
margin-left: 5px;
margin-top: 25px;
`;

const ReviewStar = styled.img`
width:15px;
height: auto;
margin-right: 7px;
`;

const ModalHeading = styled.h1`
display: inline;
text-align: left;
padding: 5px;
font-weight: bold;
font-size:23px;
margin-left: 5px;


`;

const ModalReviewStar = styled.img`
width:20px;
height: auto;
margin-right: 7px;
`;

const DisplayHeader = (props) => {
  if (props.view === 'Modal') {
    return (
      <ModalHeading>
        <ModalReviewStar src="https://zenrent.s3-us-west-1.amazonaws.com/red-star.png" />
        {props.TotalScore} ({props.NumOfReviews} reviews)
      </ModalHeading>
    );
  } else {
    return (
      <Heading>
        <ReviewStar src="https://zenrent.s3-us-west-1.amazonaws.com/red-star.png" />
        {props.TotalScore} ({props.NumOfReviews} reviews)
      </Heading>
    )
  }
};

export default DisplayHeader;