import React from 'react';
import styled from 'styled-components';
import DisplayHeader from './DisplayHeader.jsx';

const Container = styled.div`
margin-left: 5%;
`;

const Wrapper = styled.div`
display: flex;
flex-flow: row nowrap;
${'' /* margin-left: 28%;
margin-right: 28%; */}
color: #222222;
`;

const Cell = styled.div`
${'' /* border: 1px dotted; */}
text-align: left;
padding: 5px;
font-size: 13px;
flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 90px;
`;

const Cell1 = styled.div`
text-align: left;
padding: 5px;
font-size: 13px;
margin-right: 70px;
flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 90px;
`;

const ModalContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-left: 3%;
margin-top: 12%;

`;

const ModalWrapper = styled.div`
display: flex;
justify-content: flex-end;
flex-flow: row nowrap;
margin-left: 58%;
margin-bottom: .1%;

color: #222222;
`;

const ModalCellName = styled.div`
flex: 1;
margin-left: 55px;
margin-right: 20px;
${'' /* border: 1px dotted; */}
text-align: left;
padding: 5px;
font-size: 12px;
flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 90px;
`;

const DataDisplay = (props) => {
  const {
    Accuracy, Checkin, Cleanliness, Communication, Location, Value,
  } = props.RatingData;

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
  z-index: -10;
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
    z-index: -10;

    width: ${props => {
    if (props.Category === 'Accuracy') {
      return (`${AccuracyBar}%`);
    }
    if (props.Category === 'Location') {
      return (`${LocationBar}%`);
    }
    if (props.Category === 'Checkin') {
      return (`${CheckinBar}%`);
    }
    if (props.Category === 'Cleanliness') {
      return (`${CleanlinessBar}%`);
    }
    if (props.Category === 'Communication') {
      return (`${CommunicationBar}%`);
    }
    if (props.Category === 'Value') {
      return (`${ValueBar}%`);
    }
  }
  };
transition: width .3s linear;
`;
  console.log(window.innerWidth)
  if (props.view === 'Modal' || window.innerWidth <= 954) {
    return (
      <ModalContainer>
        <ModalWrapper>
          <ModalCellName>Cleanliness</ModalCellName>
          <Cell>
            <Progress>
              <Determinate Category="Cleanliness" />
            </Progress>
          </Cell>
          <Cell>{Cleanliness}</Cell>
        </ModalWrapper>

        <ModalWrapper>
          <ModalCellName>Accuracy</ModalCellName>
          <Cell>
            <Progress>
              <Determinate Category="Accuracy" />
            </Progress>
          </Cell>
          <Cell>{Accuracy}</Cell>
        </ModalWrapper>

        <ModalWrapper>
          <ModalCellName>Communication</ModalCellName>
          <Cell>
            <Progress>
              <Determinate Category="Communication" />
            </Progress>
          </Cell>
          <Cell>{Communication}</Cell>
        </ModalWrapper>

        <ModalWrapper>
          <ModalCellName>Location</ModalCellName>
          <Cell>
            <Progress>
              <Determinate Category="Location" />
            </Progress>
          </Cell>
          <Cell>{Location}</Cell>
        </ModalWrapper>

        <ModalWrapper>
          <ModalCellName>Checkin</ModalCellName>
          <Cell>
            <Progress>
              <Determinate Category="Checkin" />
            </Progress>
          </Cell>
          <Cell>{Checkin}</Cell>
        </ModalWrapper>

        <ModalWrapper>
          <ModalCellName>Value</ModalCellName>
          <Cell>
            <Progress>
              <Determinate Category="Value" />
            </Progress>
          </Cell>
          <Cell>{Value}</Cell>
        </ModalWrapper>
      </ModalContainer>);
  } else {
    return (
      <Container>
        <Wrapper>
          <DisplayHeader
            TotalScore={props.TotalScore}
            NumOfReviews={props.NumOfReviews}
          />
        </Wrapper>
        <Wrapper>
          <Cell1>Cleanliness</Cell1>
          <Cell>
            <Progress>
              <Determinate Category="Cleanliness" />
            </Progress>
          </Cell>
          <Cell>{Cleanliness}</Cell>
          <Cell1>Accuracy</Cell1>
          <Cell>
            <Progress>
              <Determinate Category="Cleanliness" />
            </Progress>
          </Cell>
          <Cell>{Accuracy}</Cell>
        </Wrapper>

        <Wrapper>
          <Cell1>Communication</Cell1>
          <Cell>
            <Progress>
              <Determinate Category="Communication" />
            </Progress>
          </Cell>
          <Cell>{Communication}</Cell>
          <Cell1>Location</Cell1>
          <Cell>
            <Progress>
              <Determinate Category="Location" />
            </Progress>
          </Cell>
          <Cell>{Location}</Cell>
        </Wrapper>

        <Wrapper>
          <Cell1>Checkin</Cell1>
          <Cell>
            <Progress>
              <Determinate Category="Checkin" />
            </Progress>
          </Cell>
          <Cell>{Checkin}</Cell>
          <Cell1>Value</Cell1>
          <Cell>
            <Progress>
              <Determinate Category="Value" />
            </Progress>
          </Cell>
          <Cell>{Value}</Cell>
        </Wrapper>
      </Container>
    );
  }
};

export default DataDisplay;
