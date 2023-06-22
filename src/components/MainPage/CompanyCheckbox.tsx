import React, { useEffect, useState } from 'react';
import { setCompany, useAppDispatch, useAppSelector } from '../../store';

export default function CompanyCheckbox({ el }: { el: string }) {
  const [isChecked, setChecked] = useState<boolean>(false);
  const companySize = useAppSelector((state) => state.filter.companySize);
  const dispatch = useAppDispatch();

  const onCheckboxClick = () => {
    setChecked((cur) => !cur);
    dispatch(setCompany(el));
  };

  useEffect(() => {
    if (companySize.includes(el)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [companySize, el]);

  return <div onClick={onCheckboxClick} className={isChecked ? 'checkbox checked' : 'checkbox'}></div>;
}
