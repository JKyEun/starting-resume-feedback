import React from 'react';

export default function MentoringMethod() {
  return (
    <div className="mentoring-method">
      <div className="title">멘토링 방식</div>
      <div className="method">
        <div>
          진행 수단 <span>*</span>
        </div>
        <div>
          <textarea></textarea>
        </div>
      </div>
      <div className="time">
        <div>
          1회 진행 시간 <span>*</span>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="price">
        <div>
          1회 가격 <span>*</span>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
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
    </div>
  );
}
