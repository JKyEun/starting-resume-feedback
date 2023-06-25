import React from 'react';
import BasicInfo from '../components/MentorRegistorPage/BasicInfo';
import '../style/mentorRegistorPage.scss';
import MentoringInfo from '../components/MentorRegistorPage/MentoringInfo';
import MentoringMethod from '../components/MentorRegistorPage/MentoringMethod';

export default function MentorRegistorPage() {
  return (
    <div className="page">
      <div className="inner">
        <div className="information">
          <BasicInfo />
          <MentoringInfo />
          <MentoringMethod />
        </div>
        <div className="status-box">
          <div>기본 정보</div>
          <div>멘토링 정보</div>
          <div>멘토링 방식</div>
        </div>
      </div>
    </div>
  );
}
