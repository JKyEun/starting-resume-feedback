import React from 'react';

export default function EachReview() {
  return (
    <div>
      <div className="name">
        <span>김**</span> · <span>UX/UI 디자인</span>
      </div>
      <div className="star">
        <span>별별별별별</span> <span>5.0</span>
      </div>
      <p className="content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga obcaecati velit odit at id quis cupiditate quam
        assumenda veniam perferendis dolores sit quo, exercitationem repellat. Iste ipsa molestiae repellendus minus?
      </p>
      <div className="badge">30분 · 구두 멘토링</div>
      <div className="date">2023. 12. 12.</div>
    </div>
  );
}
