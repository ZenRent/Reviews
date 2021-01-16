import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DataDisplay from './DataDisplay.jsx';
import ReviewList from './ReviewList.jsx';
//Test

const ModalBtn = styled.button`
display: flex;
margin-left: 10%;
border: 1px solid;
padding: 8px;
background-color: white;
border-radius: 7px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };

    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    console.log('hit getReviews');
    axios.get('/reviews')
      .then((response) => {
        console.log('response.data', response.data);
        const targetReviews = [];
        response.data.forEach((current) => {
          if (current.Listing === '69664 Daija Wall') {
            targetReviews.push(current);
          }
        });
        this.setState({ reviews: targetReviews });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <DataDisplay />
        <ReviewList reviews={this.state.reviews} />
        <ModalBtn>Show all Reviews</ModalBtn>
      </div>
    );
  }
}

export default App;
