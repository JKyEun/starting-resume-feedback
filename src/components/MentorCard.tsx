import React from 'react';
import '../style/mentorCard.scss';

export default function MentorCard() {
  return (
    <div className="mentor-card">
      <div className="intro-wrap">
        <img className="profile-img" src="/images/demoImg.svg" alt="프로필 이미지" />
        <img className="bookmark" src="/images/bookmark.svg" alt="북마크" />
      </div>
      <span className="mentor-name">장경은</span>
      <span className="mentor-company">네이버</span>
      <div className="job-wrap">
        <span className="job">프론트엔드</span> · <span className="year">3년차</span>
      </div>
      <span className="explain">대기업/빅테크/스타트업 경험자가 함께 고민해주는 커피챗 타임</span>
      <hr className="divide" />
      <div className="review-wrap">
        <img src="/images/star.svg" alt="별점" />
        <span>5.0 (99+)</span>
        <span>멘토링 9회</span>
      </div>
      <div className="personality-wrap">
        <span>멘토성향</span>
        <span>멘토성향</span>
        <span>멘토성향</span>
      </div>
    </div>
  );
}
