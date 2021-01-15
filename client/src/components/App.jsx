import React from 'react';
import axios from 'axios';
import DataDisplay from './DataDisplay.jsx';

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
        this.setState({ reviews: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <DataDisplay />
    );
  }
}

export default App;
