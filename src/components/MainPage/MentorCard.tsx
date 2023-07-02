import React from 'react';
import '../../style/mentorCard.scss';
import { useNavigate } from 'react-router';

export default function MentorCard({
  content,
  nickname,
  company,
  job,
  year,
  count,
  profileImg,
  idx,
  uuid,
}: {
  content: string;
  nickname: string;
  company: string;
  job: string;
  year: string;
  count: number;
  profileImg: string;
  idx: number;
  uuid: number;
}) {
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/${uuid}`);
  };

  return (
    <div onClick={onCardClick} className={idx % 4 === 3 ? 'mentor-card last' : 'mentor-card'}>
      <div className="intro-wrap">
        <img
          className="profile-img"
          src={profileImg === null ? '/images/basic-img.svg' : profileImg}
          alt="프로필 이미지"
        />
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
        <span>멘토링 {count}회</span>
      </div>
    </div>
  );
}
