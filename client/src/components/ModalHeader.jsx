import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar.jsx';
import DisplayHeader from './DisplayHeader.jsx';

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

const StickyHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px solid gray;
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
    zindex: 100;
`;

const ModalHeader = (props) => {
  return (
    <StickyHeader>
      <XCloseBtn onClick={() => console.log("Test")}>X</XCloseBtn>
      <Row>
        <DisplayHeader view={props.view} TotalScore={props.TotalScore} NumOfReviews={props.NumOfReviews} />
        <SearchBar filterSearch={props.filterSearch} />
      </Row>
    </StickyHeader>
  )
};

export default ModalHeader;