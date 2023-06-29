import React from 'react';
import '../../style/mainBanner.scss';

export default function MainBanner() {
  const randomNumber = Math.floor(Math.random() * 2);
  return (
    <div className="main-banner">
      <img src={`/images/banner${randomNumber}.svg`} alt="메인 배너" />
    </div>
  );
}
