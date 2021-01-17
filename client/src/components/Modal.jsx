import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';

const ModalObj = styled.div`

display: flex;
width: 50%;
height: 90%;
border: 1px solid;
padding: 8px;
background-color: white;
border-radius: 7px;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (<ModalObj><ReviewList reviews={this.props.reviews} view={this.props.view} /></ModalObj>)
  }
}

export default Modal;