import React, { useEffect, useRef, useState } from 'react';
import { jobClass } from '../../util/constant';
import JobCheckbox from './JobCheckbox';
import { removeJob, setJobFolder, useAppDispatch, useAppSelector } from '../../store';

export default function JobFilter() {
  const dispatch = useAppDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const jobFolder = useAppSelector((state) => state.filter.jobFolder);
  const selectedJobFolder = jobClass.filter((el) => el.class === jobFolder)[0];
  const outSideDropdown = useRef<HTMLDivElement>(null);
  const job = useAppSelector((state) => state.filter.job);

  const onDropdownClick = () => {
    setDropdownOpen((cur) => !cur);
  };

  const onCancelClick = () => {
    dispatch(removeJob());
    setDropdownOpen(false);
  };

  const onJobFolderClick = (el: string) => {
    dispatch(setJobFolder(el));
  };

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (isDropdownOpen && !outSideDropdown.current?.contains(e.target as HTMLElement)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [isDropdownOpen]);

  return (
    <div ref={outSideDropdown}>
      <div onClick={onDropdownClick} className="dropdown-btn job">
        {job.length === 0 ? (
          <span>직무 선택</span>
        ) : job.length === 1 ? (
          <span className="selected-title">{job[0]}</span>
        ) : (
          <span className="selected-title">
            {job[0]} 외 {job.length}
          </span>
        )}

        {isDropdownOpen ? (
          <img src="/images/arrow-up.svg" alt="위 화살표" />
        ) : (
          <img src="/images/arrow-down.svg" alt="아래 화살표" />
        )}
      </div>
      {isDropdownOpen && (
        <div className="dropdown job">
          <div className="list job">
            <div className="job-folder">
              {jobClass.map((el) => (
                <div key={el.class} onClick={() => onJobFolderClick(el.class)} className="check-list">
                  {el.class}
                </div>
              ))}
            </div>
            {jobFolder === '' ? (
              <div className="none-job">
                <div>직군을 선택해주세요</div>
              </div>
            ) : (
              <div className="job-specific list">
                {selectedJobFolder.job.map((el) => (
                  <div key={el} className="check-list">
                    <JobCheckbox el={el} />
                    <div>{el}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="btns">
            <button onClick={onCancelClick} className="cancel-btn" type="button">
              초기화
            </button>
            <button onClick={onDropdownClick} className="complete-btn" type="button">
              선택 완료
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
