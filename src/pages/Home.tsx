import React from 'react';
import Products from '../components/Products';
import ScopaManuale from '../components/ScopaManuale';
import MakaControl from '../components/MakaControl';
import Cassoni from '../components/Cassoni';
import Tramoggia from '../components/Tramoggia';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Products />
      <ScopaManuale />
      <MakaControl />
      <Cassoni />
      <Tramoggia />
      <Contact />
    </main>
  );
};

export default Home;
