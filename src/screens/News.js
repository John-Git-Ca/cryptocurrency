import React, { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const News = () => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

  const { data } = useGetCryptoNewsQuery({ newsCategory, count: 6 });
  console.log(data);

  return (
    <MainContainer>
      <div>nwe</div>
      <div>nwe</div>
      <div>nwe</div>
      <div>nwe</div>
    </MainContainer>
  );
};

export default News;
