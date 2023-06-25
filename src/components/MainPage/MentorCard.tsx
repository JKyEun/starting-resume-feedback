import React from 'react';
import '../../style/mentorCard.scss';

export default function MentorCard({
  content,
  nickname,
  company,
  job,
  year,
}: {
  content: string;
  nickname: string;
  company: string;
  job: string;
  year: string;
}) {
  return (
    <div className="mentor-card">
      <div className="intro-wrap">
        <img className="profile-img" src="/images/demoImg.svg" alt="프로필 이미지" />
        <img className="bookmark" src="/images/bookmark.svg" alt="북마크" />
      </div>
      <span className="mentor-name">{nickname}</span>
      <span className="mentor-company">{company}</span>
      <div className="job-wrap">
        <div className="job">{job}</div>
        <div className="year">{year}</div>
      </div>
      <span className="explain">{content.length > 130 ? content.substring(0, 130) + '...' : content}</span>
      <hr className="divide" />
      <div className="review-wrap">
        <img src="/images/star.svg" alt="별점" />
        <span>5.0 (99+)</span>
        <span>멘토링 0회</span>
      </div>
    </div>
  );
}
