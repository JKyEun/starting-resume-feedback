import React, { useRef, useState } from 'react';
import CompanyCheckbox from './CompanyCheckbox';
import { removeCompany, useAppDispatch, useAppSelector } from '../../store';
import { companyClass } from '../../util/constant';
import useOutsideClick from '../../hooks/useOutsideClick';

export default function CompanyFilter() {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const outSideDropdown = useRef<HTMLDivElement>(null);
  const companySize = useAppSelector((state) => state.filter.companySize);
  const dispatch = useAppDispatch();

  const onDropdownClick = () => {
    setDropdownOpen((cur) => !cur);
  };

  const onCancelClick = () => {
    dispatch(removeCompany());
    setDropdownOpen(false);
  };

  useOutsideClick(isDropdownOpen, outSideDropdown, setDropdownOpen);

  return (
    <div ref={outSideDropdown}>
      <div onClick={onDropdownClick} className={isDropdownOpen ? 'dropdown-btn clicked' : 'dropdown-btn'}>
        {companySize.length === 0 ? (
          <span>기업 종류 선택</span>
        ) : companySize.length === 1 ? (
          <span className="selected-title">{companySize[0]}</span>
        ) : (
          <span className="selected-title">
            {companySize[0]} 외 {companySize.length}
          </span>
        )}
        {isDropdownOpen ? (
          <img src="/images/arrow-up.svg" alt="위 화살표" />
        ) : (
          <img src="/images/arrow-down.svg" alt="아래 화살표" />
        )}
      </div>
      {isDropdownOpen && (
        <div className="dropdown">
          <div className="list">
            {companyClass.map((el: string) => (
              <div key={el} className="check-list">
                <CompanyCheckbox el={el} />
                <span>{el}</span>
              </div>
            ))}
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
