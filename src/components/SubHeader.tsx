import React from 'react';
import '../style/subHeader.scss';

export default function SubHeader() {
  return (
    <div className="sub-header-area">
      <div className="sub-header-container">
        <div className="menu-container">
          <span className="menu selected">멘토 찾기</span>
          <span className="menu">멘토링 현황</span>
        </div>
        <div className="search-area">
          <img src="/images/search.svg" alt="돋보기" />
          <input type="text" placeholder="회사, 직무, 학교로 검색하기" />
        </div>
      </div>
    </div>
  );
}
