import React, { useState } from 'react';
import { jobClass } from '../../util/constant';
import JobCheckbox from './JobCheckbox';
import { useAppSelector } from '../../store';

export default function JobFilter() {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const jobFolder = useAppSelector((state) => state.filter.jobFolder);
  const selectedJobFolder = jobClass.filter((el) => el.class === jobFolder)[0];

  console.log(selectedJobFolder);

  const onDropdownClick = () => {
    setDropdownOpen((cur) => !cur);
  };

  return (
    <div>
      <div onClick={onDropdownClick} className="dropdown-btn job">
        직무 선택
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
                <div className="check-list">{el.class}</div>
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
            <button className="cancel-btn" type="button">
              초기화
            </button>
            <button className="complete-btn" type="button">
              선택 완료
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
