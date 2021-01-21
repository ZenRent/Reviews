import React from 'react';
import ReviewList from './ReviewList.jsx';
import styled from 'styled-components';

const FormContainer = styled.form`
display: inline;
`;

const SearchForm = styled.input`
background-color: #f7f7f7;
width: 380px;
height: 30px;
radius: 30px;
border-radius: 30px;
margin-left: 100px;
margin-top: 12px;
  }
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('this.state.search', this.state.search);
    this.props.filterSearch(this.state.search);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (<FormContainer onSubmit={this.handleSubmit}>
      <label>
        <SearchForm type="text" name="search" placeholder="Search reviews" value={this.state.value} onChange={this.handleChange} />
      </label>
      {/* <input type="submit" value="Submit" /> */}
    </FormContainer>)
  }
}

export default SearchBar;
