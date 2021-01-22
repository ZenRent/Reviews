import React from 'react';
import ReviewList from './ReviewList.jsx';
import styled from 'styled-components';
import { MagnifyingGlass } from '@styled-icons/open-iconic/MagnifyingGlass';

const FormContainer = styled.form`
display: inline;
`;

const SearchForm = styled.input`
background-color: #f7f7f7;
width: 350px;
height: 26px;
radius: 30px;
border-radius: 30px;
margin-left: 5px;
margin-top: 2px;
border: #f7f7f7;

  }
`;

const Label = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
background-color: #f7f7f7;
width: 380px;
height: 30px;
radius: 30px;
border-radius: 30px;
border: black solid 2px;
margin-top: 15px;
margin-left: 100px;

  }
`;

const SearchIcon = styled(MagnifyingGlass)`
  color: black;
  width:15px;
height: auto;
margin-left: 1px;
margin-top: 1px;
z-index: 2;
padding-left: 5px;
`

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
      <Label><SearchIcon />
        <SearchForm type="text" name="search" placeholder="Search reviews" value={this.state.value} onChange={this.handleChange}></SearchForm>
      </Label>
      {/* <input type="submit" value="Submit" /> */}
    </FormContainer>)
  }
}

export default SearchBar;
