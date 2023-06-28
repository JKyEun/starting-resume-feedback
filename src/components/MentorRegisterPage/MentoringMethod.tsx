import React, { useState } from 'react';

export default function MentoringMethod() {
  const [monTime, setMonTime] = useState<string[]>(['']);
  const [tueTime, setTueTime] = useState<string[]>(['']);
  const [wedTime, setWedTime] = useState<string[]>(['']);
  const [thuTime, setThuTime] = useState<string[]>(['']);
  const [friTime, setFriTime] = useState<string[]>(['']);
  const [satTime, setSatTime] = useState<string[]>(['']);
  const [sunTime, setSunTime] = useState<string[]>(['']);
  const timeArr = [
    ['월', monTime, setMonTime],
    ['화', tueTime, setTueTime],
    ['수', wedTime, setWedTime],
    ['목', thuTime, setThuTime],
    ['금', friTime, setFriTime],
    ['토', satTime, setSatTime],
    ['일', sunTime, setSunTime],
  ];

  const setTime = (dayTime: any, setDayTime: any, idx: any, time: any) => {
    const arr = dayTime;
    arr[idx] = time;
    setDayTime(arr);
  };

  return (
    <div className="mentoring-method">
      <div className="title">멘토링 방식</div>
      <div className="method">
        <div>
          진행 수단 <span>*</span>
        </div>
        <div>
          <textarea></textarea>
        </div>
      </div>
      <div className="time">
        <div>
          1회 진행 시간 <span>*</span>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="price">
        <div>
          1회 가격 <span>*</span>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="available">
        <div>
          멘토링 가능 시간 <span>*</span>
        </div>
        <div className="time-picker">
          {timeArr.map((timeEl: any) => (
            <div key={timeEl[0]}>
              <span className="day">
                <img src="/images/check.svg" alt="체크" /> <span>{timeEl[0]}</span>
              </span>
              <span>
                {timeEl[1].map((el: string, idx: number) => (
                  <input
                    key={el + idx.toString()}
                    onChange={(e) => {
                      setTime(timeEl[1], timeEl[2], idx, e.target.value);
                    }}
                    className="time"
                    type="time"
                  />
                ))}
              </span>
              <span
                onClick={() => {
                  timeEl[2]([...timeEl[1], '']);
                }}
                className="add">
                추가
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
