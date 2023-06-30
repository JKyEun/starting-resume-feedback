import React, { useState } from 'react';
import { setSchedule, useAppDispatch, useAppSelector } from '../../store';

export default function EachTime({ time, dayIdx, timeIdx }: { time: string; dayIdx: number; timeIdx: number }) {
  const [isTimeClicked, setTimeClicked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const scheduleInStore = useAppSelector((state) => state.schedule);

  const convertTime = () => {
    setTimeClicked((cur) => !cur);

    if (isTimeClicked) {
      const updatedSchedule = scheduleInStore.map((day, index) => {
        if (index === dayIdx) {
          const updatedDay = day.filter((time, timeIndex) => timeIndex !== timeIdx);
          return updatedDay;
        }
        return day;
      });
      dispatch(setSchedule(updatedSchedule));
    } else {
      const updatedSchedule = scheduleInStore.map((day, index) => {
        if (index === dayIdx) {
          const newTime = { id: +new Date(), time };
          const updatedDay = [...day, newTime];
          return updatedDay;
        }
        return day;
      });
      dispatch(setSchedule(updatedSchedule));
    }
  };

  return (
    <span onClick={convertTime} className={isTimeClicked ? 'clicked' : ''}>
      {time}
    </span>
  );
}
