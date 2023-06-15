import React from 'react';
import '../style/mainHeader.scss';

export default function MainHeader() {
  return (
    <div className="header-area">
      <div className="header-container">
        <a href="/">
          <div className="img-container">
            <img src="/images/starting-logo-color.svg" alt="스타팅 로고" />
          </div>
        </a>
        <div className="menu-container">
          <span className="menu">내 이력서</span>
          <span className="menu selected">이력서 피드백</span>
          <span className="menu">마이페이지</span>
        </div>
      </div>
    </div>
  );
}
