import React, { useEffect, useRef } from 'react';
import { setMentorRegister, setSchedule, useAppDispatch, useAppSelector } from '../../store';
import AvailableTime from './AvailableTime';

export default function MentoringMethod() {
  const oneWeek = ['월', '화', '수', '목', '금', '토', '일'];
  const curriculum = useRef<HTMLTextAreaElement>(null);
  const time = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const schedule = useAppSelector((state) => state.schedule);
  const scheduleArr = Object.values(schedule);
  const savedSchedule = localStorage.getItem('MENTOR_REGISTER_SCHEDULE');
  const parsedSavedSchedule = savedSchedule ? JSON.parse(savedSchedule) : null;

  const sendInfo = (updatedSchedule: any = schedule) => {
    const info = {
      curriculum: curriculum.current?.value,
      time: time.current?.value,
      cost: Number(price.current?.value),
      schedules: [
        { day: '월', time: updatedSchedule[0].map((el: any) => el.time) },
        { day: '화', time: updatedSchedule[1].map((el: any) => el.time) },
        { day: '수', time: updatedSchedule[2].map((el: any) => el.time) },
        { day: '목', time: updatedSchedule[3].map((el: any) => el.time) },
        { day: '금', time: updatedSchedule[4].map((el: any) => el.time) },
        { day: '토', time: updatedSchedule[5].map((el: any) => el.time) },
        { day: '일', time: updatedSchedule[6].map((el: any) => el.time) },
      ],
    };

    dispatch(setMentorRegister(info));
  };

  useEffect(() => {
    const mentorInfo = localStorage.getItem('MENTOR_REGISTER_INFO');
    if (mentorInfo) {
      const parsedMentorInfo = JSON.parse(mentorInfo);
      if (time.current) time.current.value = parsedMentorInfo.time;
      if (curriculum.current) curriculum.current.value = parsedMentorInfo.curriculum;
      if (price.current) price.current.value = parsedMentorInfo.cost;

      sendInfo();
    }

    if (savedSchedule) {
      dispatch(setSchedule(parsedSavedSchedule));
      sendInfo(parsedSavedSchedule);
    }
  }, []);

  return (
    <div className="mentoring-method">
      <div className="title">멘토링 방식</div>
      <div className="method">
        <div>
          진행 수단 <span>*</span>
        </div>
        <div>
          <textarea onChange={sendInfo} ref={curriculum}></textarea>
        </div>
      </div>
      <div className="time">
        <div>
          1회 진행 시간 (분 단위로 입력해주세요) <span>*</span>
        </div>
        <div>
          <input onChange={sendInfo} ref={time} type="number" />
        </div>
      </div>
      <div className="price">
        <div>
          1회 가격 <span>*</span>
        </div>
        <div>
          <input onChange={sendInfo} ref={price} type="number" />
        </div>
      </div>
      <div className="available">
        <div>
          멘토링 가능 시간 <span>*</span>
        </div>
        <div className="time-picker">
          {oneWeek.map((day, dayIdx) => (
            <div key={day}>
              <span className="day">
                <img src="/images/check.svg" alt="체크" /> <span>{day}</span>
              </span>
              <span>
                {scheduleArr[dayIdx].map((schedule, timeIdx) => (
                  <AvailableTime key={schedule.id} sendInfo={sendInfo} dayIdx={dayIdx} timeIdx={timeIdx} />
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
