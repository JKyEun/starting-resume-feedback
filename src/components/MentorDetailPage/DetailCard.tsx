import React from 'react';
import { useNavigate, useParams } from 'react-router';

export default function DetailCard({ mentorInfo }: { mentorInfo: any }) {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="detail-card">
      <img
        className="profile-img"
        src={mentorInfo.profile === '' || mentorInfo.profile === null ? '/images/basic-img.svg' : mentorInfo.profile}
        alt="프로필 이미지"
      />
      <span className="badge">{mentorInfo.badges && mentorInfo.badges[mentorInfo.badges.length - 1]}</span>
      <div className="info">
        <div className="nickname">{mentorInfo.mentor?.nickname}</div>
        <div className="company">{mentorInfo.mentor?.company?.name}</div>
        <div className="job">{mentorInfo.mentor?.subjob?.name}</div>
        <div className="year">{mentorInfo.mentor?.year?.name}</div>
      </div>
      <div className="num">
        <div>
          <div>멘토링 횟수</div>
          <div>0회</div>
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
          <span>00명</span>
        </div>
        <div onClick={() => navigate(`/${id}/apply`)} className="apply">
          멘토링 신청하기
        </div>
      </div>
    </div>
  );
}
