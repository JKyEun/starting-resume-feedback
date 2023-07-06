import React from 'react';
import { useNavigate } from 'react-router';
import '../style/mentorRegisterPage.scss';
import BasicInfo from '../components/MentorRegisterPage/BasicInfo';
import MentoringInfo from '../components/MentorRegisterPage/MentoringInfo';
import MentoringMethod from '../components/MentorRegisterPage/MentoringMethod';
import { useAppSelector } from '../store';
import { changeRole, setMentorInfo } from '../apis/register';
import StatusBox from '../components/MentorRegisterPage/StatusBox';

export default function MentorRegisterPageTest() {
  const info = useAppSelector((state) => state.mentorRegistor);
  const schedule = useAppSelector((state) => state.schedule);
  const navigate = useNavigate();

  const saveInfo = () => {
    localStorage.setItem('MENTOR_REGISTER_INFO', JSON.stringify(info));
    localStorage.setItem('MENTOR_REGISTER_SCHEDULE', JSON.stringify(schedule));
    alert('작성된 정보가 저장되었습니다.');
  };

  const submitInfo = async () => {
    await changeRole();
    const res = (await setMentorInfo(info)) || { status: 0 };

    if (res.status === 200) {
      navigate('/');
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
        <StatusBox />
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
