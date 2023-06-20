import React from 'react';
import MainBanner from '../components/MainPage/MainBanner';
import FilterArea from '../components/MainPage/FilterArea';
import CardCollection from '../components/MainPage/CardCollection';

export default function MainPage() {
  return (
    <div>
      <MainBanner />
      <FilterArea />
      <CardCollection />
    </div>
  );
}
