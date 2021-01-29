import React from 'react';
import styled from 'styled-components';
import ReviewEntry from './ReviewEntry.jsx';

const ReviewLayout = styled.ul`
${'' /* columns: 2 auto; */}
justify-content: space-evenly;
display: flex;
flex-wrap: wrap;
grid-gap: 3px;
${'' /* margin-left: 375px; */}
${'' /* margin-left: 22%;
margin-right: 22%; */}
max-width: 1000px;
flex-basis: 500px;
margin-left:5%;
margin-right:7%
`;

const ModalReviewLayout = styled.ul`
margin-left: -173px;
margin-top:50px;
`;

const ReviewList = (props) => {
  if (props.view === 'Modal') {
    return (<ModalReviewLayout>{
      props.reviews.map((review) => {
        if (review.Reviews[0].Body.includes(props.TargetString)) {
          return (<ReviewEntry
            review={review}
            targetString={props.TargetString}
            />)
        }
      })
    }</ModalReviewLayout>);
  }
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
