import React from 'react';

export default function EachReview() {
  return (
    <div className="each-review">
      <div className="name">
        <span>김**</span> · <span>UX/UI 디자인</span>
      </div>
      <div className="star">
        <span>
          <img src="/images/full-star.svg" alt="별" />
          <img src="/images/full-star.svg" alt="별" />
          <img src="/images/full-star.svg" alt="별" />
          <img src="/images/full-star.svg" alt="별" />
          <img src="/images/full-star.svg" alt="별" />
        </span>
        <span className="score">5.0</span>
      </div>
      <p className="content">
        어떤 부분이 문제인지 감을 못 잡은 채로 계속 헤메고 있었는데 솔직한 피드백 주셔서 너무 많은 도움이 됐습니다!
        관점을 아예 바꿔서 구성해야한다는 것을 깨달아서 방향 잡고 바꿀 수 있을 것 같아요. 면접 준비도 더 많이 많이
        해야겠어요! 감사합니다~~
      </p>
      <span className="review-badge">30분 · 구두 멘토링</span>
      <div className="date">2023. 5. 12.</div>
    </div>
  );
}
