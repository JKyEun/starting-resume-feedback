import React from 'react';
import '../style/mentorDetailPage.scss';
import MentoringReview from '../components/MentorDetailPage/MentoringReview';
import DetailCard from '../components/MentorDetailPage/DetailCard';

export default function MentorDetailPage() {
  return (
    <div className="page">
      <div className="detail-inner">
        <div className="information">
          <div className="detail-title">대기업/빅테크/스타트업 경험자가 함께 고민해주는 커피챗 타임</div>
          <div className="introduce">
            <div className="sub-title">멘토 소개</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo cupiditate, provident
              dignissimos earum perferendis maxime eum iusto, saepe esse atque. Deserunt explicabo in tempora excepturi
              nobis delectus est minima!
            </div>
          </div>
          <div className="range">
            <div className="sub-title">멘토링 가능 분야</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo cupiditate, provident
              dignissimos earum perferendis maxime eum iusto, saepe esse atque. Deserunt explicabo in tempora excepturi
              nobis delectus est minima!
            </div>
          </div>
          <div className="subject">
            <div className="sub-title">멘토링 주제</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo cupiditate, provident
              dignissimos earum perferendis maxime eum iusto, saepe esse atque. Deserunt explicabo in tempora excepturi
              nobis delectus est minima!
            </div>
          </div>
          <div className="target">
            <div className="sub-title">멘토링 대상</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo cupiditate, provident
              dignissimos earum perferendis maxime eum iusto, saepe esse atque. Deserunt explicabo in tempora excepturi
              nobis delectus est minima!
            </div>
          </div>
          <div className="prepare">
            <div className="sub-title">멘티 준비사항</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo cupiditate, provident
              dignissimos earum perferendis maxime eum iusto, saepe esse atque. Deserunt explicabo in tempora excepturi
              nobis delectus est minima!
            </div>
          </div>
          <div className="method">
            <div className="sub-title">진행 방식</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo cupiditate, provident
              dignissimos earum perferendis maxime eum iusto, saepe esse atque. Deserunt explicabo in tempora excepturi
              nobis delectus est minima!
            </div>
          </div>
          <div className="price">
            <div className="sub-title">가격 정보</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo cupiditate, provident
              dignissimos earum perferendis maxime eum iusto, saepe esse atque. Deserunt explicabo in tempora excepturi
              nobis delectus est minima!
            </div>
          </div>
          <MentoringReview />
        </div>
        <DetailCard />
      </div>
    </div>
  );
}
