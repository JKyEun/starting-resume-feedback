import React from 'react';
import MainBanner from '../components/MainBanner';
import FilterArea from '../components/FilterArea';

export default function MainPage() {
  return (
    <div className="inner">
      <MainBanner />
      <FilterArea />
    </div>
  );
}
