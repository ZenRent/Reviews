import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';
import DataDisplay from './DataDisplay.jsx';
import SearchBar from './SearchBar.jsx';
import DisplayHeader from './DisplayHeader.jsx';

const ModalObj = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: 43%;
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

const Row = styled.div`
 display: flex;
 flex-direction: row;
 align-items: flex-start;
 padding: 10px;
`;

const XCloseBtn = styled.button`

padding-left:5px;
padding-top: 5px;
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
  display: flex;
  flex-direction: row;

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
    };
    this.filterSearch = this.filterSearch.bind(this);
  }

  filterSearch(SearchInput) {
    this.setState({ TargetString: SearchInput });
  }

  render() {
    return (
      <ModalObj>
        <XCloseBtn onClick={() => this.props.closeModal()}>X</XCloseBtn>
        <Row>
          <DisplayHeader view={this.props.view} TotalScore={this.props.TotalScore} NumOfReviews={this.props.NumOfReviews} />
          <SearchBar filterSearch={this.filterSearch} />
        </Row>
        <Row>
          <DataDisplay view={this.props.view} RatingData={this.props.RatingData} />
          <ReviewList TargetString={this.state.TargetString} reviews={this.props.reviews} view={this.props.view} />
        </Row>
      </ModalObj>);
  }
}

export default Modal;