import React from 'react';
import Banner from '../components/Banner';
import FavouriteBooks from './FavouriteBooks';
import FavBookSection from './FavBookSection';
import PromoBnnaer from './PromoBnnaer';
import OtherBooks from './OtherBooks';
import Review from './Review';

function Home() {
  return (
    <div>
      <Banner/>
      <FavouriteBooks/>
      <FavBookSection/>
      <PromoBnnaer/>
      <OtherBooks/>
      <Review/>
    </div>
  );
}

export default Home;
