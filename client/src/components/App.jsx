import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tutorial from './AddReview.jsx';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    console.log('Use effect is similar to component did mount, but must pass in [] as second param');
    getReviews();
  }, []);

  const getReviews = () => {
    console.log('hit getReviews');
    axios.get('/reviews')
      .then((response) => {
        console.log('response.data', response.data);
        setReviews(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        3 Clicks for Tutorial
        {count}
      </button>
      <div>
        {count > 2 ? <Tutorial /> : null}
      </div>
    </div>
  );
}

export default App;
