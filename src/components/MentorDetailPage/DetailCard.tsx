import React from 'react';

export default function DetailCard() {
  return (
    <div className="detail-card">
      <img className="profile-img" src="/images/demoImg.svg" alt="프로필 이미지" />
      <span className="badge">신규</span>
      <div className="info">
        <div className="nickname">닉네임</div>
        <div className="company">쿠팡</div>
        <div className="job">프론트엔드</div>
        <div className="year">주니어 (1 ~ 4년)</div>
      </div>
      <div className="num">
        <div>
          <div>멘토링 횟수</div>
          <div>100회</div>
        </div>
        <div>
          <div>후기 수</div>
          <div>100개</div>
        </div>
        <div>
          <div>응답률</div>
          <div>99%</div>
        </div>
      </div>
      <div className="btns">
        <div className="follow">
          <span className="img">
            <img src="/images/bookmark-detail.svg" alt="북마크" />
          </span>
          <span>000</span>
        </div>
        <div className="apply">멘토링 신청하기</div>
      </div>
    </div>
  );
}
