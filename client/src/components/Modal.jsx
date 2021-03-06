import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';
import DataDisplay from './DataDisplay.jsx';
import SearchBar from './SearchBar.jsx';
import DisplayHeader from './DisplayHeader.jsx';
import ModalHeader from './ModalHeader.jsx';

const StickyHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: white;

    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 10%;
    position: fixed;
    background-color:white;
    z-index: 30;
`;

const ModalObj = styled.div`
display: flex;
${'' /* transition: all .5s; */}
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: 780px;
height: 90%;
border: 1px solid gray;
padding: 8px;
background-color: rgb(255, 255, 255);
border-radius: 15px;
position: absolute;
  top: calc(50% + ${(props) => (props.PageTop)}px);
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  z-index: 27;





`;

const ModalBody = styled.div`
margin-top:3%;
width: 788px;
height: 100%;
${'' /* allow modal to accomodate all of content at present view */}
min-height: 100px;
overflow: hidden;
${'' /* max height and overflow allow scrollable */}
max-height: calc(100vh - 110px);
    overflow-y: auto;
z-index: 27;
`;

const ModalBackDrop = styled.div`
top: 0;
background-color: rgba(32,32,32,0.6);
 position: fixed;
 top: 0px;
    left: 0px;
 height: 100%;
 width: 100%;
 z-index: 25;
`;

const Row = styled.div`
 display: flex;
 flex-direction: row;
 align-items: flex-start;
 padding: 10px;
 margin-top: -5px;
`;

const XCloseBtn = styled.button`
margin-left:7px;
margin-top: 7px;
border: none;
background: none;
cursor:pointer;
color: black;
font-size: 12px;
font-weight: bold;
&:hover {
border-radius: 30px;
background: #BEBEBE;
  }
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TargetString: '',
      PageTop: window.scrollY,
    };
    this.filterSearch = this.filterSearch.bind(this);
  }

  filterSearch(SearchInput) {
    this.setState({ TargetString: SearchInput });
  }

  render() {
    return (
      <div>
        <ModalBackDrop onClick={() => this.props.closeModal()} >
        </ModalBackDrop>

        <ModalObj PageTop={this.state.PageTop}>
          {/* <ModalHeader view={this.props.view} closeModal={this.props.closeModal} /> */}
          <StickyHeader>
            <XCloseBtn onClick={() => this.props.closeModal()}>X</XCloseBtn>
            <Row>
              <DisplayHeader view={this.props.view} TotalScore={this.props.TotalScore} NumOfReviews={this.props.NumOfReviews} />
              <SearchBar filterSearch={this.filterSearch} />
            </Row>
          </StickyHeader>
          <ModalBody>

            <Row>
              <DataDisplay view={this.props.view} RatingData={this.props.RatingData} />
              <ReviewList TargetString={this.state.TargetString} reviews={this.props.reviews} view={this.props.view} />
            </Row>
          </ModalBody>
        </ModalObj>

      </div>
    );
  }
}

export default Modal;