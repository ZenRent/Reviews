import React from 'react';
import styled from 'styled-components';
import DisplayHeader from './DisplayHeader.jsx';

const Container = styled.div`
margin-left: 1%;
`;

const Wrapper = styled.div`
display: flex;
flex-flow: row nowrap;
margin-left: 28%;
margin-right: 28%;
color: #222222;
`;

const ModalWrapper = styled.div`
display: flex;
justify-content: flex-end;
flex-flow: row nowrap;
margin-left: 58%;

color: #222222;
`;

const ModalCellName = styled.div`
flex: 1;
margin-left: 1px;
${'' /* border: 1px dotted; */}
text-align: right;
padding: 5px;
font-size: 13px;
`;

const Cell = styled.div`
flex: 1;
${'' /* border: 1px dotted; */}
text-align: left;
padding: 5px;
font-size: 13px;
`;

const RatingBar = styled.img`
width:150px;
height: 15px;
margin-right: 7px;
`;

const DataDisplay = (props) => {
  const { Accuracy, Checkin, Cleanliness, Communication, Location, Value } = props.RatingData;
  const LocationBar = Math.ceil(Location * 20);
  console.log('Location x2', LocationBar);
  if (props.view === 'Modal') {
    return (<Container>
      <ModalWrapper><ModalCellName>Cleanliness</ModalCellName><Cell><RatingBar src='RatingBar.png' /></Cell><Cell>{Cleanliness}</Cell></ModalWrapper>
      <ModalWrapper><ModalCellName>Accuracy</ModalCellName><Cell><RatingBar src='RatingBar.png' /></Cell><Cell>{Accuracy}</Cell></ModalWrapper>
      <ModalWrapper><ModalCellName>Communication</ModalCellName><Cell><RatingBar src='RatingBar.png' /></Cell><Cell>{Communication}</Cell></ModalWrapper>
      <ModalWrapper><ModalCellName>Location</ModalCellName><Cell><RatingBar src='RatingBar.png' /></Cell><Cell>{Location}</Cell></ModalWrapper>
      <ModalWrapper><ModalCellName>Checkin</ModalCellName><Cell><RatingBar src='RatingBar.png' /></Cell><Cell>
        {Checkin}</Cell></ModalWrapper>
      <ModalWrapper><ModalCellName>Value</ModalCellName><Cell><RatingBar src='RatingBar.png' /></Cell><Cell>
        {Value}</Cell></ModalWrapper>
    </Container>);
  } else {
    return (<Container>
      <Wrapper><DisplayHeader TotalScore={props.TotalScore} NumOfReviews={props.NumOfReviews} /></Wrapper>

      <Wrapper><Cell>Cleanliness</Cell><Cell><RatingBar src='RatingBar.png' />{Cleanliness}</Cell>
        <Cell>Accuracy</Cell><Cell><RatingBar src='RatingBar.png' />{Accuracy}</Cell></Wrapper>

      <Wrapper><Cell>Communication</Cell><Cell><RatingBar src='RatingBar.png' />{Communication}</Cell><Cell>Location</Cell><Cell><RatingBar src='RatingBar.png' />{Location}</Cell></Wrapper>
      <Wrapper><Cell>Checkin</Cell><Cell><RatingBar src='RatingBar.png' />{Checkin}</Cell><Cell>Value</Cell><Cell><RatingBar src='RatingBar.png' />{Value}</Cell></Wrapper>
    </Container>);
  }
};

export default DataDisplay;
