import React from 'react';
import '../../style/mainBanner.scss';
import { useNavigate } from 'react-router';
import { USER_ID } from '../../util/constant';

export default function MainBanner() {
  const randomNumber = Math.floor(Math.random() * 3);
  const navigate = useNavigate();
  const imgArr = ['/images/banner0.svg', '/images/banner1.svg', '/images/banner2.svg'];

  const onBannerClick = () => {
    if (randomNumber === 0) {
      navigate('/register');
    } else if (randomNumber === 2) {
      if (USER_ID) {
        navigate('/login');
      } else {
        window.location.reload();
      }
    }
  };

  return (
    <div onClick={onBannerClick} className="main-banner">
      {randomNumber === 1 ? (
        <a target="_blank" href="https://momit.notion.site/bf42b2b46d214799a25a9c7581139f5b?pvs=4">
          <img src={imgArr[randomNumber]} alt="메인 배너" />
        </a>
      ) : (
        <img src={imgArr[randomNumber]} alt="메인 배너" />
      )}
    </div>
  );
}
