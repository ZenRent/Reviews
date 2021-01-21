import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DataDisplay from './DataDisplay.jsx';
import ReviewList from './ReviewList.jsx';
import Modal from './Modal.jsx';

const ModalBtn = styled.button`
display: flex;
margin-left: 28%;
border: 1px solid;
padding: 8px;
background-color: white;
border-radius: 7px;
cursor:pointer;
&:hover {
background-color: #f7f7f7;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      view: '',
      RatingData: '',
      TotalScore: '',
      NumOfReviews: '',
    };

    this.getReviews = this.getReviews.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getRatingsData = this.getRatingsData.bind(this);
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
          if (current.Listing === '662 Stacey Union') {
            targetReviews.push(current);
          }
        });
        this.setState({ reviews: targetReviews });
        this.setState({ NumOfReviews: targetReviews.length });
        this.getRatingsData(targetReviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getRatingsData(targetReviews) {
    console.log('TARGET REVIEWS in func', targetReviews);
    const RatingsArray = targetReviews.map((current) => (current.Rating));
    console.log('RatingsArray', RatingsArray);

    const AccuracyAvg = RatingsArray.reduce((total, next) => total + next.Accuracy, 0) / RatingsArray.length;
    const CleanlinessAvg = RatingsArray.reduce((total, next) => total + next.Cleanliness, 0) / RatingsArray.length;
    const CommunicationAvg = RatingsArray.reduce((total, next) => total + next.Communication, 0) / RatingsArray.length;
    const LocationAvg = RatingsArray.reduce((total, next) => total + next.Location, 0) / RatingsArray.length;
    const CheckinAvg = RatingsArray.reduce((total, next) => total + next.Checkin, 0) / RatingsArray.length;
    const ValueAvg = RatingsArray.reduce((total, next) => total + next.Value, 0) / RatingsArray.length;
    const Obj = {
      Accuracy: AccuracyAvg,
      Cleanliness: CleanlinessAvg,
      Communication: CommunicationAvg,
      Location: LocationAvg,
      Checkin: CheckinAvg,
      Value: ValueAvg,
    };
    Object.entries(Obj).forEach(([key, value]) => {
      Obj[key] = Number.parseFloat(value).toFixed(1);
      console.log('Obj[key]', Obj[key]);
    });
    console.log('Obj', Obj);
    this.setState({ RatingData: Obj });

    const Integers = Object.values(Obj).map((current) => {
      return (parseFloat(current));
    });
    const Sum = Integers.reduce((t, n) => t + n) / 6;
    console.log('Sum', Sum);
    const Score = Number.parseFloat(Sum).toFixed(2);
    console.log('Score', Score);
    this.setState({ TotalScore: Score });

    // console.log('AccuracyAvg', AccuracyAvg),
    //   console.log('CleanlinessAvg', CleanlinessAvg),
    //   console.log('CommunicationAvg', CommunicationAvg),
    //   console.log('LocationAvg', LocationAvg),
    //   console.log('CheckinAvg', CheckinAvg),
    //   console.log('ValueAvg', ValueAvg)
    // console.log("RatingsArray", RatingsArray)
    // Accuracy.reduce((accum, current) => {
    //   console.log("total", accum + current)
    // })
  }

  closeModal() {
    this.setState({ view: 'View' });
  }

  render() {
    return (
      <div >
        <DataDisplay RatingData={this.state.RatingData} TotalScore={this.state.TotalScore} NumOfReviews={this.state.NumOfReviews} />
        <ReviewList reviews={this.state.reviews} />
        <ModalBtn onClick={() => this.setState({ view: 'Modal' })}>Show all Reviews</ModalBtn>
        {this.state.view === 'Modal' ? <Modal reviews={this.state.reviews} RatingData={this.state.RatingData}
          TotalScore={this.state.TotalScore} NumOfReviews={this.state.NumOfReviews} closeModal={this.closeModal} view={this.state.view} /> : null}

      </div>
    );
  }
}

export default App;
