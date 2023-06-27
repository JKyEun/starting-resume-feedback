import React from 'react';

export default function MentoringApplyPage() {
  return (
    <div className="page">
      <div className="inner">
        <div className="apply-page">
          <div className="apply-title">멘토링 신청</div>
          <div className="available">
            <div>
              멘토링 가능 시간 <span>*</span>
            </div>
            <div className="time-picker">
              <div>
                <span className="day">월</span>
                <input className="time" type="time" />
                <span className="add">추가</span>
              </div>
              <div>
                <span className="day">월</span>
                <input className="time" type="time" />
                <span className="add">추가</span>
              </div>
              <div>
                <span className="day">월</span>
                <input className="time" type="time" />
                <span className="add">추가</span>
              </div>
              <div>
                <span className="day">월</span>
                <input className="time" type="time" />
                <span className="add">추가</span>
              </div>
              <div>
                <span className="day">월</span>
                <input className="time" type="time" />
                <span className="add">추가</span>
              </div>
              <div>
                <span className="day">월</span>
                <input className="time" type="time" />
                <span className="add">추가</span>
              </div>
              <div>
                <span className="day">월</span>
                <input className="time" type="time" />
                <span className="add">추가</span>
              </div>
            </div>
          </div>
          <div className="phone">
            <div>
              연락 가능한 연락처 <span>*</span>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="email">
            <div>
              연락 가능한 이메일 <span>*</span>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="url">
            <div>
              스타팅 이력서 URL <span>*</span>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="content">
            <div>
              멘토링 받고 싶은 내용 <span>*</span>
            </div>
            <div>
              <textarea></textarea>
            </div>
          </div>
          <div className="pay">결제하기</div>
        </div>
      </div>
    </div>
  );
}
