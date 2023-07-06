import React, { ChangeEvent, useState } from 'react';
import { setSchedule, useAppDispatch, useAppSelector } from '../../store';

export default function AvailableTime({
  sendInfo,
  dayIdx,
  timeIdx,
}: {
  sendInfo: (updatedSchdule: any) => void;
  dayIdx: number;
  timeIdx: number;
}) {
  const dispatch = useAppDispatch();
  const scheduleInStore = useAppSelector((state) => state.schedule);
  // const savedSchedule = localStorage.getItem('MENTOR_REGISTER_SCHEDULE');
  // const parsedSavedSchedule = savedSchedule ? JSON.parse(savedSchedule) : null;
  const [inputValue, setInputValue] = useState<string>(scheduleInStore[dayIdx][timeIdx].time);

  const updateTimeValues = () => {
    const updatedSchedule = scheduleInStore.map((day, index) => {
      if (index === dayIdx) {
        return day.map((time, timeIndex) => {
          if (timeIndex === timeIdx) {
            return { id: +new Date(), time: inputValue || '' };
          }
          return time;
        });
      }
      return day;
    });

    dispatch(setSchedule(updatedSchedule));
    sendInfo(updatedSchedule);
  };

  const addTimeValues = () => {
    const addSchedule = scheduleInStore.map((day, index) => {
      if (index === dayIdx) {
        const newTime = { id: +new Date(), time: '' };
        const updatedDay = [...day, newTime];
        return updatedDay;
      }
      return day;
    });

    dispatch(setSchedule(addSchedule));
  };

  const deleteTimeValues = () => {
    const updatedSchedule = scheduleInStore.map((day, index) => {
      if (index === dayIdx) {
        const updatedDay = day.filter((time, timeIndex) => timeIndex !== timeIdx);
        return updatedDay;
      }
      return day;
    });

    dispatch(setSchedule(updatedSchedule));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <span className="relative">
      <input className="time" type="time" value={inputValue} onChange={onInputChange} onBlur={updateTimeValues} />
      {scheduleInStore[dayIdx].length !== 1 && (
        <span onClick={deleteTimeValues} className="remove">
          <img src="/images/close.svg" alt="삭제" />
        </span>
      )}
      {scheduleInStore[dayIdx].length - 1 === timeIdx && (
        <span onClick={addTimeValues} className="add">
          추가
        </span>
      )}
    </span>
  );
}
