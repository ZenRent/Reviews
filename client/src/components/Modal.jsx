import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';
import DataDisplay from './DataDisplay.jsx';
import SearchBar from './SearchBar.jsx';

const ModalObj = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: 50%;
height: 90%;
border: 1px solid;
padding: 8px;
background-color: white;
border-radius: 7px;
${'' /* allow modal to accomodate all of content at present view */}
min-height: 100px;
overflow: hidden;
${'' /* max height and overflow allow scrollable */}
max-height: calc(100vh - 200px);
    overflow-y: auto;

position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const XCloseBtn = styled.button`

padding: 2;
border: none;
background: none;
cursor:pointer;
color: #4c4c4c;
font-size: 12px;
font-weight: bold;
&:hover {
border-radius: 30px;
background: #BEBEBE;
  }
`;

const StickyHeader = styled.div`

    ${'' /* top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 10%;
    position: fixed;
    background-color:red;
    border: 2px Solid; */}
`;



class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TargetString: '',
    }
    this.filterSearch = this.filterSearch.bind(this);
  }

  filterSearch(SearchInput) {
    console.log("SearchInput", SearchInput);
    this.setState({ TargetString: SearchInput });
  }


  render() {
    return (
      <ModalObj>
        <StickyHeader />
        <XCloseBtn onClick={() => this.props.closeModal()}>X</XCloseBtn>
        <SearchBar filterSearch={this.filterSearch} />
        <StickyHeader />
        <DataDisplay />
        <ReviewList TargetString={this.state.TargetString} reviews={this.props.reviews} view={this.props.view} />
      </ModalObj>)
  }
}

export default Modal;