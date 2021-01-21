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
width: auto;
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
  const AccuracyBar1 = Math.ceil(Accuracy * 20);
  console.log('AccuracyBar1', AccuracyBar1);

  const Progress = styled.div`
position: relative;
  height: 3px;
  display: block;
  width: 132px;
  background-color: #D3D3D3;
  border-radius: 2px;
  background-clip: padding-box;
  margin: 0.5rem 0 .5rem 0;
  overflow: hidden;
`;

  const LocationBar = (Math.ceil(Location * 20));
  const AccuracyBar = (Math.ceil(Accuracy * 20));
  const CheckinBar = (Math.ceil(Checkin * 20));
  const CleanlinessBar = (Math.ceil(Cleanliness * 20));
  const CommunicationBar = (Math.ceil(Communication * 20));
  const ValueBar = (Math.ceil(Value * 20));

  const Determinate = styled.div`
position: absolute;
    top: 0;
    bottom: 0;
    background-color: black;

    width: ${props => {
      if (props.Category === "Accuracy") {
        return (`${AccuracyBar}%`)
      }
      if (props.Category === "Location") {
        return (`${LocationBar}%`)
      }
      if (props.Category === "Checkin") {
        return (`${CheckinBar}%`)
      }
      if (props.Category === "Cleanliness") {
        return (`${CleanlinessBar}%`)
      }
      if (props.Category === "Communication") {
        return (`${CommunicationBar}%`)
      }
      if (props.Category === "Value") {
        return (`${ValueBar}%`)
      }

    }
    };
transition: width .3s linear;
`;

  if (props.view === 'Modal') {
    return (<Container>
      <ModalWrapper>
        <ModalCellName>Cleanliness</ModalCellName>
        <Cell>
          <Progress>
            <Determinate Category="Cleanliness" ></Determinate>
          </Progress>
        </Cell>
        <Cell>{Cleanliness}</Cell>
      </ModalWrapper>

      <ModalWrapper>
        <ModalCellName>Accuracy</ModalCellName>
        <Cell>
          <Progress>
            <Determinate Category="Accuracy" ></Determinate>
          </Progress>
        </Cell>
        <Cell>{Accuracy}</Cell>
      </ModalWrapper>

      <ModalWrapper>
        <ModalCellName>Communication</ModalCellName>
        <Cell>
          <Progress>
            <Determinate Category="Communication" ></Determinate>
          </Progress>
        </Cell>
        <Cell>{Communication}</Cell>
      </ModalWrapper>

      <ModalWrapper>
        <ModalCellName>Location</ModalCellName>
        <Cell>
          <Progress>
            <Determinate Category="Location" ></Determinate>
          </Progress>
        </Cell>
        <Cell>{Location}</Cell>
      </ModalWrapper>

      <ModalWrapper><ModalCellName>Checkin</ModalCellName>
        <Cell>
          <Progress>
            <Determinate Category="Checkin" ></Determinate>
          </Progress>
        </Cell>
        <Cell>{Checkin}</Cell>
      </ModalWrapper>

      <ModalWrapper>
        <ModalCellName>Value</ModalCellName>
        <Cell>
          <Progress>
            <Determinate Category="Value" ></Determinate>
          </Progress>
        </Cell>
        <Cell>{Value}</Cell>
      </ModalWrapper>
    </Container>);
  } else {
    return (<Container>
      <Wrapper><DisplayHeader TotalScore={props.TotalScore} NumOfReviews={props.NumOfReviews} /></Wrapper>

      <Wrapper>
        <Cell>Cleanliness</Cell>
        <Cell><Progress>
          <Determinate Category="Cleanliness" ></Determinate>
        </Progress></Cell>
        <Cell>{Cleanliness}</Cell>
        <Cell>Accuracy</Cell>
        <Cell>
          <Progress>
            <Determinate Category="Cleanliness" ></Determinate>
          </Progress>
        </Cell>
        <Cell>{Accuracy}</Cell>
      </Wrapper>

      <Wrapper>
        <Cell>Communication</Cell>
        <Cell>
          <Progress>
            <Determinate Category="Communication" ></Determinate>
          </Progress>
        </Cell>
        <Cell>{Communication}</Cell>
        <Cell>Location</Cell>
        <Cell>
          <Progress>
            <Determinate Category="Location" ></Determinate>
          </Progress>
        </Cell>
        <Cell>{Location}</Cell>
      </Wrapper>

      <Wrapper>
        <Cell>Checkin</Cell>
        <Cell>
          <Progress>
            <Determinate Category="Checkin" ></Determinate>
          </Progress>
        </Cell>
        <Cell>{Checkin}</Cell>
        <Cell>Value</Cell>
        <Cell>
          <Progress>
            <Determinate Category="Value" ></Determinate>
          </Progress>
        </Cell>
        <Cell>{Value}</Cell>
      </Wrapper>
    </Container>);
  }
};

export default DataDisplay;
