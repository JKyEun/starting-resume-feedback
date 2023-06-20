import React from 'react';
import '../../style/mentorCard.scss';

export default function MentorCard({
  content,
  name,
  company,
  job,
  year,
  count,
}: {
  content: string;
  name: string;
  company: string;
  job: string;
  year: number;
  count: number;
}) {
  return (
    <div className="mentor-card">
      <div className="intro-wrap">
        <img className="profile-img" src="/images/demoImg.svg" alt="프로필 이미지" />
        <img className="bookmark" src="/images/bookmark.svg" alt="북마크" />
      </div>
      <span className="mentor-name">{name}</span>
      <span className="mentor-company">{company}</span>
      <div className="job-wrap">
        <span className="job">{job}</span> · <span className="year">{year}년차</span>
      </div>
      <span className="explain">{content.length > 130 ? content.substring(0, 130) + '...' : content}</span>
      <hr className="divide" />
      <div className="review-wrap">
        <img src="/images/star.svg" alt="별점" />
        <span>5.0 (99+)</span>
        <span>멘토링 {count}회</span>
      </div>
      <div className="personality-wrap">
        <span>멘토성향</span>
        <span>멘토성향</span>
        <span>멘토성향</span>
      </div>
    </div>
  );
}
