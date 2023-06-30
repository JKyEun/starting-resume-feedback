import React from 'react';
import CompanyFilter from './CompanyFilter';
import '../../style/filterArea.scss';
import JobFilter from './JobFilter';

export default function FilterArea() {
  return (
    <div className="filterArea">
      <div className="inner">
        <JobFilter />
        <CompanyFilter />
        {/* <SortingRule /> */}
      </div>
    </div>
  );
}
