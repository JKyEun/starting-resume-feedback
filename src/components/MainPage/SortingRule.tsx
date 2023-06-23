import React, { useRef, useState } from 'react';
import { setOrder, useAppDispatch, useAppSelector } from '../../store';
import { orderList } from '../../util/constant';
import useOutsideClick from '../../hooks/useOutsideClick';

export default function SortingRule() {
  const dispatch = useAppDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const outSideDropdown = useRef<HTMLDivElement>(null);
  const order = useAppSelector((state) => state.filter.order);

  const onDropdownClick = () => {
    setDropdownOpen((cur) => !cur);
  };

  const onOrderClick = (el: string) => {
    dispatch(setOrder(el));
    setDropdownOpen(false);
  };

  useOutsideClick(isDropdownOpen, outSideDropdown, setDropdownOpen);

  return (
    <div className="sorting-rule" ref={outSideDropdown}>
      <div onClick={onDropdownClick} className="dropdown-btn sort">
        <span>{order}</span>
        {isDropdownOpen ? (
          <img src="/images/arrow-up.svg" alt="위 화살표" />
        ) : (
          <img src="/images/arrow-down.svg" alt="아래 화살표" />
        )}
      </div>
      {isDropdownOpen && (
        <div className="dropdown sort">
          {orderList.map((el) => (
            <div key={el} onClick={() => onOrderClick(el)} className="list sort">
              {el}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
