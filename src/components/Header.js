import React from 'react';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Link to="/">
          <NavbarBrand className="nav_brand">Crypto Currency</NavbarBrand>
        </Link>
        <Link to="cryptoDetails">CryptoDetails</Link>
        <Link to="cryptocurrencies">Cryptocurrencies</Link>
        <Link to="exchanges">Exchanges</Link>
        <Link to="news">News</Link>
      </Container>
    </Navbar>
  );
};

export default Header;
