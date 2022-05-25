import React from 'react';
import { Container, Row, Col, Badge, Table } from 'react-bootstrap';
import Loader from '../components/Loader';
import { useGetCryptosQuery } from '../services/cryptoApi';
import './homepage.css';
import millify from 'millify';
import MainContainer from '../components/MainContainer';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(3);
  const globalStats = data?.data?.stats;
  const coins = data?.data?.coins;
  if (isFetching)
    return (
      <Container>
        <Loader />
      </Container>
    );
  console.log(data.data);
  return (
    <MainContainer>
      <h5>Global Crypto Stats</h5>
      <Row className="summary_row my-3">
        <Col xs={12} md={12}></Col>
        <Col>
          Total:{' '}
          <Badge pill bg="danger" className="fs-6">
            {millify(globalStats.total)}
          </Badge>
        </Col>
        <Col>
          Total Exchanges:{' '}
          <Badge pill bg="danger " className="fs-6">
            {millify(globalStats.totalExchanges)}
          </Badge>
        </Col>
        <Col>
          Total MarketCap:{' '}
          <Badge pill bg="danger" className="fs-6">
            $ {millify(globalStats.totalMarketCap)}
          </Badge>
        </Col>
        <Col>
          Total 24h Volume:{' '}
          <Badge pill bg="danger" className="fs-6">
            {millify(globalStats.total24hVolume)}
          </Badge>
        </Col>
        <Col>
          Total Markets:{' '}
          <Badge pill bg="danger" className="fs-6">
            {millify(globalStats.totalMarkets)}
          </Badge>
        </Col>
      </Row>
      <h5>Top Cryptos</h5>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>MarketCap</th>
              <th>Price</th>
              <th>Coin Ranking</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr key={index}>
                <td>{coin.rank}</td>
                <td>{coin.name}</td>
                <td>$ {millify(coin.marketCap)}</td>
                <td>
                  <strong>$ {Math.round(coin.price * 100) / 100}</strong>
                </td>
                <td>
                  <a href={coin.coinrankingUrl}>Details</a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </MainContainer>
  );
};

export default Homepage;
