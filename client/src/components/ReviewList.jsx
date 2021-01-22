import React from 'react';
import styled from 'styled-components';
import ReviewEntry from './ReviewEntry.jsx';

const ReviewLayout = styled.ul`
columns: 2 auto ;
${'' /* margin-left: 375px; */}
margin-left: 21%;
margin-right: 21%;
max-width: 800px;

`;

const ModalReviewLayout = styled.ul`
margin-left: -173px;
margin-top:-50px;
`;

const ReviewList = (props) => {
  if (props.view === 'Modal') {
    return (<ModalReviewLayout>{
      props.reviews.map((review) => {
        if (review.Reviews[0].Body.includes(props.TargetString)) {
          return (<ReviewEntry
            review={review} />);
        }
      })
    }</ModalReviewLayout>);
  }
  console.log('props.reviews', props.reviews);
  return (
    <ReviewLayout>{
      props.reviews.map((review, index) => {
        if (index <= 5) {
          return (<ReviewEntry
            review={review} />);
        }
      })
    }
    </ReviewLayout>
  );
};

export default ReviewList;
