import React, { useState } from 'react';

export default function CategoryCheckbox() {
  const [isChecked, setChecked] = useState<boolean>(false);

  const onCheckboxClick = () => {
    setChecked((cur) => !cur);
  };

  return (
    <div onClick={onCheckboxClick} className={isChecked ? 'checkbox checked' : 'checkbox'}>
      {isChecked && <img src="/images/checked.svg" alt="체크" />}
    </div>
  );
}
