import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import styled from 'styled-components';

const ReviewLayout = styled.ul`
columns: 2 auto;
`;

const ReviewList = (props) => {
  console.log("props.reviews", props.reviews)
  return (
    <ReviewLayout>{
      props.reviews.map((review) => {
        return (<ReviewEntry
          review={review} />)
      })
    }
    </ReviewLayout>
  )
}


export default ReviewList;


