import React from 'react';

export default function MentoringInfo() {
  return (
    <div className="mentoring-info">
      <div className="title">멘토링 정보</div>
      <div className="introduce">
        <div>
          한줄 소개 <span>*</span>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="mentor-introduce">
        <div>
          멘토 소개 <span>*</span>
        </div>
        <div>
          <textarea></textarea>
        </div>
      </div>
      <div className="range">
        <div>
          멘토링 가능 분야 <span>*</span>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="subject">
        <div>
          멘토링 주제 <span>*</span>
        </div>
        <div>
          <textarea></textarea>
        </div>
      </div>
      <div className="target">
        <div>
          멘토링 대상 <span>*</span>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="prepare">
        <div>
          멘티 준비사항 <span>*</span>
        </div>
        <div>
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
}
