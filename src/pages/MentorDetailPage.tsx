import React, { useEffect, useState } from 'react';
import '../style/mentorDetailPage.scss';
import { useParams } from 'react-router';
import axios from 'axios';
import MentoringReview from '../components/MentorDetailPage/MentoringReview';
import DetailCard from '../components/MentorDetailPage/DetailCard';

export default function MentorDetailPage() {
  const { id } = useParams();
  const [mentorInfo, setMentorInfo] = useState<any>({});

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await axios.get(`http://43.201.17.248:8080/mentor/${id}`);
        setMentorInfo(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getInfo();
  }, []);

  return (
    <div className="page">
      <div className="detail-inner">
        <div className="information">
          <div className="detail-title">{mentorInfo.title}</div>
          <div className="introduce">
            <div className="sub-title">멘토 소개</div>
            <div>{mentorInfo.introduce}</div>
          </div>
          <div className="range">
            <div className="sub-title">멘토링 가능 분야</div>
            <div>{mentorInfo.possibles}</div>
          </div>
          <div className="subject">
            <div className="sub-title">멘토링 주제</div>
            <div>{mentorInfo.concept}</div>
          </div>
          <div className="target">
            <div className="sub-title">멘토링 대상</div>
            <div>{mentorInfo.target}</div>
          </div>
          <div className="prepare">
            <div className="sub-title">멘티 준비사항</div>
            <div>{mentorInfo.prepare}</div>
          </div>
          <div className="method">
            <div className="sub-title">진행 방식</div>
            <div>{mentorInfo.curriculum}</div>
          </div>
          <div className="price">
            <div className="sub-title">가격 정보</div>
            <div>
              {mentorInfo.time}분 {mentorInfo.cost}원
            </div>
          </div>
          <MentoringReview />
        </div>
        <DetailCard mentorInfo={mentorInfo} />
      </div>
    </div>
  );
}
