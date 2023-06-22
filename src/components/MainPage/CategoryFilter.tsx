import React, { useEffect, useRef, useState } from 'react';
import CategoryCheckbox from './CategoryCheckbox';

export default function CategoryFilter({ title, category }: { title: string; category: string[] }) {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdown = useRef<HTMLDivElement>(null);

  const onDropdownClick = () => {
    setDropdownOpen((cur) => !cur);
  };

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (isDropdownOpen && !dropdown.current?.contains(e.target as HTMLElement)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [isDropdownOpen]);

  return (
    <div ref={dropdown}>
      <div onClick={onDropdownClick} className={isDropdownOpen ? 'dropdown-btn clicked' : 'dropdown-btn'}>
        <span>{title}</span>
        {isDropdownOpen ? (
          <img src="/images/arrow-up.svg" alt="위 화살표" />
        ) : (
          <img src="/images/arrow-down.svg" alt="아래 화살표" />
        )}
      </div>
      {isDropdownOpen && (
        <div className="dropdown">
          <div className="list">
            {category.map((el) => (
              <div key={el} className="check-list">
                <CategoryCheckbox />
                <span>{el}</span>
              </div>
            ))}
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
