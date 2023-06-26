import React from 'react';

export default function MentoringMethod() {
  return (
    <div className="mentoring-method">
      <div className="title">멘토링 정보</div>
      <div className="method">
        <div>
          한줄 소개 <span>*</span>
        </div>
        <div>
          <input type="text" />
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
        <div>
          <div>
            <span>월</span>
            <input type="time" />
            <span>부터</span>
            <input type="time" />
            <span>까지</span>
          </div>
          <div>
            <span>화</span>
            <input type="time" />
            <span>부터</span>
            <input type="time" />
            <span>까지</span>
          </div>
          <div>
            <span>수</span>
            <input type="time" />
            <span>부터</span>
            <input type="time" />
            <span>까지</span>
          </div>
          <div>
            <span>목</span>
            <input type="time" />
            <span>부터</span>
            <input type="time" />
            <span>까지</span>
          </div>
          <div>
            <span>금</span>
            <input type="time" />
            <span>부터</span>
            <input type="time" />
            <span>까지</span>
          </div>
          <div>
            <span>토</span>
            <input type="time" />
            <span>부터</span>
            <input type="time" />
            <span>까지</span>
          </div>
          <div>
            <span>일</span>
            <input type="time" />
            <span>부터</span>
            <input type="time" />
            <span>까지</span>
          </div>
        </div>
      </div>
    </div>
  );
}
