import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import styled from 'styled-components';

const ReviewLayout = styled.ul`
columns: 2 auto ;
margin-left: 375px;
max-width: 800px;

`;

const ModalReviewLayout = styled.ul`

`;

const ReviewList = (props) => {
  if (props.view === "Modal") {
    return (<ModalReviewLayout>{
      props.reviews.map((review, i) => {
        console.log("RIGHTUNIVERSE", review.Reviews[0].Body)
        if (review.Reviews[0].Body.includes(props.TargetString)) {
          return (<ReviewEntry
            review={review} />)
          {/* } */ }
        }
      })
    }</ModalReviewLayout>)
  }
  console.log("props.reviews", props.reviews)
  return (
    <ReviewLayout>{
      props.reviews.map((review, index) => {
        if (index <= 5) {
          return (<ReviewEntry
            review={review} />)
        }
      })
    }
    </ReviewLayout>
  )
  if (this.props.view === "Modal") {
    return (
      props.reviews.map((review, index) => {

        return (<ReviewEntry
          review={review} />)

      })
    )

  }
}




export default ReviewList;


