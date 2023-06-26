import React from 'react';
import BasicInfo from '../components/MentorRegisterPage/BasicInfo';
import '../style/mentorRegisterPage.scss';
import MentoringInfo from '../components/MentorRegisterPage/MentoringInfo';
import MentoringMethod from '../components/MentorRegisterPage/MentoringMethod';

export default function MentorRegisterPage() {
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
      <div className="save-register">
        <div className="save">저장하기</div>
        <div className="register">멘토 등록하기</div>
      </div>
    </div>
  );
}
