import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import '../style/mentorRegisterPage.scss';
import BasicInfo from '../components/MentorRegisterPage/BasicInfo';
import MentoringInfo from '../components/MentorRegisterPage/MentoringInfo';
import MentoringMethod from '../components/MentorRegisterPage/MentoringMethod';
import { useAppSelector } from '../store';

export default function MentorRegisterPage() {
  const [curScroll, setCurScroll] = useState<number>(1);
  const info = useAppSelector((state) => state.mentorRegistor);
  const navigate = useNavigate();
  const INFO_SCROLL_NUM = 1135;
  const METHOD_SCROLL_NUM = 2087;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < INFO_SCROLL_NUM) {
        setCurScroll(1);
      } else if (window.scrollY < METHOD_SCROLL_NUM && window.scrollY >= INFO_SCROLL_NUM) {
        setCurScroll(2);
      } else {
        setCurScroll(3);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const saveInfo = () => {
    localStorage.setItem('MENTOR_REGISTER_INFO', JSON.stringify(info));
  };

  const submitInfo = async () => {
    try {
      const res1 = await axios.post('http://43.201.17.248:8080/role', null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
        },
      });
      console.log(res1.data);

      const res = await axios.post('http://43.201.17.248:8080/mentor/info', info, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
        },
      });

      console.log(res.data);

      if (res.status === 200) {
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      alert('필수 값을 모두 입력하세요');
    }
  };

  return (
    <div className="page">
      <div className="inner">
        <div className="information">
          <BasicInfo />
          <MentoringInfo />
          <MentoringMethod />
        </div>
        <div className="status-box">
          <div
            onClick={() => {
              window.scrollTo({ top: 40 });
            }}
            className={curScroll === 1 ? 'cur' : ''}>
            기본 정보
          </div>
          <div
            onClick={() => {
              window.scrollTo({ top: INFO_SCROLL_NUM + 40 });
            }}
            className={curScroll === 2 ? 'cur' : ''}>
            멘토링 정보
          </div>
          <div
            onClick={() => {
              window.scrollTo({ top: METHOD_SCROLL_NUM + 40 });
            }}
            className={curScroll === 3 ? 'cur' : ''}>
            멘토링 방식
          </div>
        </div>
        <div className="save-register">
          <div onClick={saveInfo} className="save">
            저장하기
          </div>
          <div onClick={submitInfo} className="register">
            멘토 등록하기
          </div>
        </div>
      </div>
    </div>
  );
}
