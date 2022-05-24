import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './screens/Homepage';
import Cryptocurrencies from './screens/Cryptocurrencies';
import Exchanges from './screens/Exchanges';
import News from './screens/News';
import CryptoDetails from './screens/CryptoDetails';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/news" element={<News />} />
          <Route path="/cryptoDetails" element={<CryptoDetails />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
