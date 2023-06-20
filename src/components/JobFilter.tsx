import React, { useState } from 'react';
import { jobClass } from '../util/constant';
import CategoryCheckbox from './CategoryCheckbox';

export default function JobFilter() {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const onDropdownClick = () => {
    setDropdownOpen((cur) => !cur);
  };

  return (
    <div>
      <div onClick={onDropdownClick} className="dropdown-btn">
        직무 선택
        {isDropdownOpen ? (
          <img src="/images/arrow-up.svg" alt="위 화살표" />
        ) : (
          <img src="/images/arrow-down.svg" alt="아래 화살표" />
        )}
      </div>
      {isDropdownOpen && (
        <div>
          <div>
            {jobClass.map((el) => (
              <div>{el.class}</div>
            ))}
            {jobClass.map((el) => (
              <div>
                <CategoryCheckbox />
                <div>{el.class}</div>
              </div>
            ))}
          </div>
          <hr />
          <button type="button">초기화</button>
          <button type="button">선택 완료</button>
        </div>
      )}
    </div>
  );
}
