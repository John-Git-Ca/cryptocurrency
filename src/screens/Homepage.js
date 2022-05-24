import React from 'react';
import { Container } from 'react-bootstrap';
import Loader from '../components/Loader';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);
  return (
    <Container fluid>
      Homepage This is home page
      <Loader />
    </Container>
  );
};

export default Homepage;
