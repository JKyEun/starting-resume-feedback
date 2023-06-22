import React, { useEffect, useState } from 'react';
import { setJob, useAppDispatch, useAppSelector } from '../../store';

export default function JobCheckbox({ el }: { el: string }) {
  const [isChecked, setChecked] = useState<boolean>(false);
  const job = useAppSelector((state) => state.filter.job);
  const dispatch = useAppDispatch();

  const onCheckboxClick = () => {
    setChecked((cur) => !cur);
    dispatch(setJob(el));
  };

  useEffect(() => {
    if (job.includes(el)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [job, el]);

  return <div onClick={onCheckboxClick} className={isChecked ? 'checkbox checked' : 'checkbox'}></div>;
}
