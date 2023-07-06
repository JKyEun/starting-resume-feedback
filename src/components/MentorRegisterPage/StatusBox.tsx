import React, { useEffect, useState } from 'react';

export default function StatusBox() {
  const [curScroll, setCurScroll] = useState<number>(1);
  const INFO_SCROLL_NUM = 1242;
  const METHOD_SCROLL_NUM = 2195;

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

  return (
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
  );
}
