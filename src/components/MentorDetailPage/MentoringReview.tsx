import React from 'react';
import EachReview from './EachReview';

export default function MentoringReview() {
  return (
    <div>
      <div className="sub-title">멘토링 후기</div>
      <div className="review-header">
        <div className="left-side">
          <div>5.0</div>
          <div>999개 후기</div>
        </div>
        <div className="right-side">
          <div>최신순</div>
          <div>별점 높은 순</div>
          <div>별점 낮은 순</div>
        </div>
      </div>
      <EachReview />
    </div>
  );
}
