import React from 'react';
import CategoryFilter from './CategoryFilter';
import { companyClass, mentoYear } from '../util/constant';
import '../style/filterArea.scss';
import JobFilter from './JobFilter';

export default function FilterArea() {
  return (
    <div className="filterArea">
      <div className="inner">
        <JobFilter />
        <CategoryFilter title="멘토 기업 종류 선택" category={companyClass} />
        <CategoryFilter title="멘토 연차 선택" category={mentoYear} />
      </div>
    </div>
  );
}
