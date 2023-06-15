import React from 'react';
import '../style/subHeader.scss';

export default function SubHeader() {
  return (
    <div className="sub-header-area">
      <div className="sub-header-container">
        <div className="menu-container">
          <span className="menu">홈</span>
          <span className="menu selected">맞춤 멘토 설정</span>
          <span className="menu">멘토링 현황</span>
          <span className="menu">멘토 등록</span>
        </div>
        <div className="search-area">
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
