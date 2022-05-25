import React from 'react';
import { Container } from 'react-bootstrap';

const MainContainer = (props) => {
  return (
    <Container className="my-3 mx-auto" fluid="md">
      {props.children}
    </Container>
  );
};

export default MainContainer;
