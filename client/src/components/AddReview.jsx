import React from 'react';
import styled from "styled-components"

const Heading = styled.h1`
color: red;
text-align: center;
`;

const Wrapper = styled.div`
display: flex;
flex-flow: row nowrap;
`;

const MainContent = styled.div`
background-color: blue;
flex: 1;
`;

const Sidebar = styled.div`
background-color: red;
flex: 0 auto;
width: 200px;
`;

const AddReview = (props) => {
  return (<div><Heading>Heading</Heading>
    <Wrapper><MainContent>Main Content</MainContent><Sidebar>Sidebar</Sidebar></Wrapper></div>)
}

export default AddReview;
