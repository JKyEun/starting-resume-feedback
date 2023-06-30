import React, { useEffect, useRef } from 'react';
import { setMentorRegister, useAppDispatch } from '../../store';

export default function MentoringInfo() {
  const title = useRef<HTMLInputElement>(null);
  const introduce = useRef<HTMLTextAreaElement>(null);
  const possibles = useRef<HTMLInputElement>(null);
  const concept = useRef<HTMLTextAreaElement>(null);
  const target = useRef<HTMLInputElement>(null);
  const prepare = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  const sendInfo = () => {
    const info = {
      title: title.current?.value,
      introduce: introduce.current?.value,
      possibles: possibles.current?.value,
      concept: concept.current?.value,
      target: target.current?.value,
      prepare: prepare.current?.value,
    };

    dispatch(setMentorRegister(info));
  };

  useEffect(() => {
    const mentorInfo = localStorage.getItem('MENTOR_REGISTER_INFO');
    if (mentorInfo) {
      const parsedMentorInfo = JSON.parse(mentorInfo);
      if (title.current) title.current.value = parsedMentorInfo.title;
      if (introduce.current) introduce.current.value = parsedMentorInfo.introduce;
      if (possibles.current) possibles.current.value = parsedMentorInfo.possibles;
      if (concept.current) concept.current.value = parsedMentorInfo.concept;
      if (target.current) target.current.value = parsedMentorInfo.target;
      if (prepare.current) prepare.current.value = parsedMentorInfo.prepare;
    }
  }, []);

  return (
    <div className="mentoring-info">
      <div className="title">멘토링 정보</div>
      <div className="introduce">
        <div>
          한줄 소개 <span>*</span>
        </div>
        <div>
          <input onChange={sendInfo} ref={title} type="text" />
        </div>
      </div>
      <div className="mentor-introduce">
        <div>
          멘토 소개 <span>*</span>
        </div>
        <div>
          <textarea onChange={sendInfo} ref={introduce}></textarea>
        </div>
      </div>
      <div className="range">
        <div>
          멘토링 가능 분야 <span>*</span>
        </div>
        <div>
          <input onChange={sendInfo} ref={possibles} type="text" />
        </div>
      </div>
      <div className="subject">
        <div>
          멘토링 주제 <span>*</span>
        </div>
        <div>
          <textarea onChange={sendInfo} ref={concept}></textarea>
        </div>
      </div>
      <div className="target">
        <div>
          멘토링 대상 <span>*</span>
        </div>
        <div>
          <input onChange={sendInfo} ref={target} type="text" />
        </div>
      </div>
      <div className="prepare">
        <div>
          멘티 준비사항 <span>*</span>
        </div>
        <div>
          <textarea onChange={sendInfo} ref={prepare}></textarea>
        </div>
      </div>
    </div>
  );
}
